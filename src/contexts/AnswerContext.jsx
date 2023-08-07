import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AnswerContext = createContext();

export default function AnswerContextProvider({ children }) {
  const [answers, setAnswers] = useState({
    nombre: '',
    segundo_nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    birthday_day: '',
    birthday_month: '',
    birthday_year: '',
    fecha_de_nacimiento: '',
    email: '',
    telefono: ''
  });
  const [currentStep, setStep] = useState(1);
  return (
    <AnswerContext.Provider value={{ answers, setAnswers, currentStep, setStep }}>
      {children}
    </AnswerContext.Provider>
  );
}

AnswerContextProvider.propTypes = {
  children: PropTypes.node
};

export const UseAnswer = () => {
  return useContext(AnswerContext);
};
