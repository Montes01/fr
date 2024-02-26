
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Gruas from './components/Gruas/Gruas';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AgregarGrua from './components/AgregarGrua/AgregarGrua';

const App = () => {
  return (
      <div>
        <Header/>
        <Routes>
          <Route path='/' element ={<Section />} />
          <Route path='/gruas' element = {<Gruas/>} />
          <Route path='/login' element = {<Login/>} />
          <Route path='/register' element = {<Register/>} />
          <Route path= '/AgregarGrua' element={<AgregarGrua/>}/>
      </Routes>
      </div>
  );
};

export default App;
