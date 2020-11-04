import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


function App() {
  return (
      // <div className="app">
      <BrowserRouter>
        
          <Navbar />
          <Switch>
            <Route exact path = '/' component={Dashboard} />
            <Route path = '/signin' component={SignIn} />
            <Route path = '/signup' component = {SignUp} />
          </Switch>
      </BrowserRouter>
      // </div>
    
  );
}

export default App;
