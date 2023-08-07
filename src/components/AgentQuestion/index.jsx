import PropTypes from 'prop-types';
import style from './style.module.css';
import { BsMeta, BsSendFill } from 'react-icons/bs';
import { Button, Input } from '../index';
import { UseAnswer } from '../../contexts/AnswerContext';
import { dateContrstructor } from '../../utils/makeBirthday';

const AgentQuestion = ({
  question,
  step,
  inputs = [
    {
      type: 'text',
      name: 'nombre',
      placeholder: 'Nombre'
    }
  ]
}) => {
  const { answers, setAnswers, currentStep, setStep } = UseAnswer();

  const handleSendResponse = () => {
    console.log(answers);
    if (currentStep === 2) {
      const birthday = dateContrstructor(
        answers.birthday_year,
        answers.birthday_month,
        answers.birthday_day
      );
      setAnswers({ ...answers, fecha_de_nacimiento: birthday });
    }

    switch (currentStep) {
      case 1:
        if (!(answers.nombre && answers.apellido_paterno)) {
          return;
        }
        setStep(2);
        break;
      case 2:
        if (!answers.fecha_de_nacimiento) {
          return;
        }
        setStep(3);
        break;
      case 3:
        if (!(answers.email || answers.telefono)) {
          return;
        }
        setStep(3);
        break;
      default:
        break;
    }
  };

  return (
    <section className={style.container}>
      <article className={style.agent} aria-label="Pregunta del Agente">
        <picture>
          <img src="/assets/iamges/asistant.png" alt="Agent" />
          <div className={style.logo}>
            <BsMeta />
          </div>
        </picture>

        <main className={style.agent_question}>
          <h3 className={style.title}>{question}</h3>
          {inputs.map((input, index) => {
            return <Input {...input} key={index} />;
          })}
        </main>
      </article>

      {currentStep > step && (
        <article aria-label="Respuesta del usuario" className={style.user}>
          <main>
            {inputs.some((input) => input.name.includes('birthday')) ? (
              <p>{answers['fecha_de_nacimiento']}</p>
            ) : (
              inputs.map((input, index) => {
                return <p key={index}>{answers[input.name]}</p>;
              })
            )}
          </main>
        </article>
      )}

      {currentStep === step && currentStep <= 2 && (
        <div className={style.button_container}>
          <Button type="button" onClick={handleSendResponse}>
            <BsSendFill size={35} />
          </Button>
        </div>
      )}
    </section>
  );
};

AgentQuestion.propTypes = {
  question: PropTypes.string,
  step: PropTypes.number,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      name: PropTypes.string,
      placeholder: PropTypes.string
    })
  )
};
export default AgentQuestion;
