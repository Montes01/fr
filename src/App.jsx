
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import GruasP2 from './components/Gruas/GruasP2/GruasP2';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const App = () => {
  return (
      <div>
        <Header/>
        <Routes>
          <Route path='/' element ={<Section />} />
          <Route path='/gruas' element = {<GruasP2/>} />
          <Route path='/login' element = {<Login/>} />
          <Route path='/register' element = {<Register/>} />
      </Routes>
      </div>
  );
};

export default App;
