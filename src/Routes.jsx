
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './Home'; 
import Gruas from './components/Gruas/Gruas'; 
import Login from './components/Login/Login'; 
import Register from './components/Register/Register'; 

export default function Routes() {
  return (
    <div>
        <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/home" component={Home} />
        <Route path="/gruas" component={Gruas} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
    </div>
  )
}
