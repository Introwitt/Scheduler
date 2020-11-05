import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CreateTodo from './components/CreateTodo';

function App() {
  return (
     
      <BrowserRouter>
        <div className="App">
        
          <Navbar />
          <Switch>
            <Route exact path = '/' component={Dashboard} />
            <Route path = '/signin' component={SignIn} />
            <Route path = '/signup' component = {SignUp} />
            <Route path = '/newTodo' component = {CreateTodo} />
          </Switch>
          </div>
      </BrowserRouter>
     
    
  );
}

export default App;
