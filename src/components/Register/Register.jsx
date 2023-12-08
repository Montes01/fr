import React from 'react';
import './Register.css';

export default function Register() {
  return (
    <section className="registro-container">
      <form className="registro-form" onSubmit={(e) => e.preventDefault()}>
        <h2 className='tituloRegister'>Registro</h2>
        <label>
          Usuario:
          <input type="text" name="username" />
        </label>
        <label>
          Correo electrónico:
          <input type="email" name="email" />
        </label>
        <label>
          Número telefónico:
          <input type="tel" name="phone" />
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" />
        </label>
        <button type="submit">Registrar</button>
      </form>
    </section>
  );
}
