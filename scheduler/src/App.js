import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path = '/' component={Dashboard} />
          <Route path = '/signin' component={SignIn} />
          <Route path = '/signup' component = {SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
