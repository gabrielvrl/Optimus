import React from 'react';
import './Main.css';
//, { useState }
//import api from '../services/api';

import logo from '../assets/logo.png';

export default function Main({ history }){
    return(
        <div className="login-container">
            <a href="/"> 
            <img src={logo} alt="Optimus" />
            </a>
        </div>
    );
}