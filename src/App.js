import React from 'react';
import './App.css';
import Login from './components/login'
import {BrowserRouter, Route} from 'react-router-dom'
import User from './components/user'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path='/' component={Login}/>
      <Route path='/User' component={User}/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
  