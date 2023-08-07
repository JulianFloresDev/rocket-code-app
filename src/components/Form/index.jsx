import style from './style.module.css';
import { useState } from 'react';
import { UseAnswer } from '../../contexts/AnswerContext';
import { SiReacthookform } from 'react-icons/si';
import { FiPower } from 'react-icons/fi';
import { AgentQuestion, Button } from '../index';

function Form() {
  const { currentStep, answers } = UseAnswer();
  const [finish, setFinish] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const reqBody = {
      nombre: formData.get('nombre'),
      segundo_nombre: formData.get('segundo_nombre'),
      apellido_paterno: formData.get('apellido_paterno'),
      apellido_materno: formData.get('apellido_materno'),
      fecha_de_nacimiento: answers.fecha_de_nacimiento,
      email: formData.get('email'),
      telefono: formData.get('telefono')
    };

    sessionStorage.setItem('userInformation', JSON.stringify(reqBody));
    await fetch('https://rocket-code-api.vercel.app/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    });
    setFinish(true);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <header className={style.header}>
        <section>
          <h2 className={style.title}>Título del Formulario</h2>
          <p>
            <FiPower /> En menos de 5 minutos
          </p>
        </section>
        <SiReacthookform fontSize={2} className={style.icon} />
      </header>
      <main className={style.content}>
        <AgentQuestion
          question={'¿Cuál es tu nombre?'}
          step={1}
          inputs={[
            {
              type: 'text',
              name: 'nombre',
              placeholder: 'Nombre'
            },
            {
              type: 'text',
              name: 'segundo_nombre',
              placeholder: 'Segundo Nombre'
            },
            {
              type: 'text',
              name: 'apellido_paterno',
              placeholder: 'Apellido paterno'
            },
            {
              type: 'text',
              name: 'apellido_materno',
              placeholder: 'Apellido materno'
            }
          ]}
        />
        {currentStep >= 2 && (
          <AgentQuestion
            question={'¿Cuál es tu fecha de nacimiento?'}
            step={2}
            inputs={[
              {
                type: 'text',
                name: 'birthday_day',
                placeholder: 'Día'
              },
              {
                type: 'text',
                name: 'birthday_month',
                placeholder: 'Mes'
              },
              {
                type: 'text',
                name: 'birthday_year',
                placeholder: 'Año'
              }
            ]}
          />
        )}
        {currentStep >= 3 && (
          <AgentQuestion
            question={'Datos de Contacto'}
            step={3}
            inputs={[
              {
                type: 'text',
                name: 'email',
                placeholder: 'Correo electrónico'
              },
              {
                type: 'text',
                name: 'telefono',
                placeholder: 'Teléfono'
              }
            ]}
          />
        )}
      </main>

      {currentStep >= 3 && <Button type="submit">Iniciar</Button>}

      {finish && (
        <div className={style.final_message}>
          <p>Fecha de Nacimiento: {answers.fecha_de_nacimiento},</p>
          <p>Correo Electrónico: {answers.email},</p>
          <p>Teléfono: {answers.telefono},</p>
          <p>
            Nombre: {answers.nombre} {answers.segundo_nombre} {answers.apellido_paterno}{' '}
            {answers.apellido_materno}
          </p>
        </div>
      )}
    </form>
  );
}

export default Form;
