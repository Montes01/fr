import React, { useState } from 'react';
import './Register.css';

export default function Register() {
  const [formData, setFormData] = useState({
    user: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos obligatorios
    if (!formData.user || !formData.email || !formData.phone || !formData.password) {
      alert('Todos los campos son obligatorios');
      return;
    }

    // Validar formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Ingrese un correo electrónico válido');
      return;
    }

    // Validar formato de número telefónico (puedes ajustar según tus requisitos)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert('Ingrese un número telefónico válido de 10 dígitos');
      return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      alert(
        'La contraseña debe contener al menos 8 caracteres, incluyendo al menos una letra y un número'
      );
      return;
    }

    // Enviar solicitud al servidor solo si pasa todas las validaciones
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);

    // Limpiar el formulario
    document.querySelector('.registro-form').reset();

    // Mostrar el mensaje de registro
    alert('Usuario registrado con éxito');

    // Redirigir después de cerrar el alert (puedes ajustar el tiempo según tus necesidades)
    setTimeout(() => {
      window.location.href = '/Login'; // Puedes cambiar esto por la ruta a la que deseas redirigir
    }, 100);
  };

  return (
    <section className="registro-container">
      <form className="registro-form" onSubmit={handleSubmit}>
        <h2 className="tituloRegister">Registro</h2>
        <label className='label-register'>
          Usuario:
          <input className='input-register' type="text" name="user" onChange={handleChange} />
        </label >
        <label className='label-register'>
          Correo electrónico:
          <input className='input-register' type="email" name="email" onChange={handleChange} />
        </label>
        <label className='label-register'>
          Número telefónico:
          <input className='input-register' type="tel" name="phone" onChange={handleChange} />
        </label>
        <label className='label-register'>
          Contraseña:
          <input className='input-register' type="password" name="password" onChange={handleChange} />
        </label>
        <button type="submit">Registrarse</button>
      </form>
    </section>
  );
}
