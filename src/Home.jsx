
import React from 'react'
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Servicios from './components/Servicios/Servicios';
import Beneficios from './components/Beneficios/Beneficios';
import Gruas from './components/Gruas/Gruas';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
export default function Home() {
  return (
    <div> 
    <Header/>
    <Section />
    <Servicios />
    <Beneficios />
    <Gruas/>
    <Login/>
    <Register/>
    </div>
  )
}
