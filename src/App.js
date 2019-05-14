import React from 'react';
import './App.css';
import Dashboard from './dashboard/dashboard';
    // Import the History component to be used below

import Login from './components/login'
import {BrowserRouter, Route} from 'react-router-dom'
import User from './components/user'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path='/' component={Login}/>
      <Route path='/User' component={User}/>
      <Route path='/Dashboard' component={Dashboard}/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
  