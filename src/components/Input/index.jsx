import PropTypes from 'prop-types';
import style from './style.module.css';
import { useState } from 'react';
import { UseAnswer } from '../../contexts/AnswerContext';
import formValidationSchema from '../../utils/validations/responseValidations';

const Input = ({ type = 'text', name = 'Input', placeholder = 'Placeholder', ...props }) => {
  const [hasError, setError] = useState({
    error: false,
    errorMessage: ''
  });
  const [input, setInputValue] = useState('');
  const { answers, setAnswers } = UseAnswer();

  const handleChange = (e) => {
    setError({
      error: false,
      errorMessage: ''
    });
    setInputValue(e.target.value);

    const { error } = formValidationSchema.validate(
      { [e.target.name]: e.target.value },
      { abortEarly: true }
    );

    if (error) {
      return setError({
        error: true,
        errorMessage: error.details[0].message
      });
    }
  };

  const handleBlur = (e) => {
    setError({
      error: false,
      errorMessage: ''
    });
    const { error } = formValidationSchema.validate(
      { [e.target.name]: e.target.value },
      { abortEarly: true }
    );

    if (error) {
      return setError({
        error: true,
        errorMessage: error.details[0].message
      });
    }

    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  return (
    <>
      <input
        value={input}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`${style.input} ${hasError.error ? style.error : ''}`}
        {...props}
      />
      {hasError.error && <span>{hasError.errorMessage}</span>}
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string
};

export default Input;
