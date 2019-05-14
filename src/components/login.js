import React from 'react';
import './login.css';
import Button from '@material-ui/core/Button';
//import salt from './img/salt-chef.jpg'
import big from '../img/big-back.jpg'



function Login() {
    
    return (
        <div className='container' id="back">
            <div id="heading">
                <h1 id="loginBox">Sous-Chef</h1>
            </div>
            <div id="imagen">
                <img src={big} alt="a salt bae"></img>
                <div className="overlay">
                    <div className="text">- Cocina desde dónde estes con lo que tengas -</div>
                </div>
            </div>
            
            <div id="texto" >
                <p>Cocinar nunca fue tan fácil. Distintas recetas que se adptan a a ti y a tu estilo de vida.</p>
                <p id="power">¿Y tú, que estás esperando?</p>
            </div>
            <div id="boton">
                <Button href="/User"variant="outlined" size="large" color="primary" >
                    Google Login
                </Button>
            </div>
        </div>
    );
  }
  
  export default Login;