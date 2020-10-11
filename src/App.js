import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/bootstrap.min.css';
import './css/style.css';
import './css/circular-std/style.css';
//import './css/fontawesome/css/fontawesome-all.css';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

import Dashboard from './components/Dashboard';


import { BrowserRouter as Router, Route, Link, Switch,Redirect } from 'react-router-dom';
import { getUser } from './utils/Common';


class App extends React.Component {

  render() {
    return (
    <Router>
            <Switch>
            <Route exact path='/' component={()=>getUser()!=null?<Dashboard/>:<Redirect to="/login" />}></Route>
            <Route exact path='/login' component={LoginForm}></Route>
            <Route exact path='/register' component={RegistrationForm}></Route>
            <Route exact path='/dashboard' component={()=>getUser()!=null?<Dashboard/>:<Redirect to="/login" />}></Route>
            </Switch>
       </Router>
  );
}
}

export default App;
