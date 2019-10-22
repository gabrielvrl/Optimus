import React, { useState } from 'react';

import './styles.css'

import api from '../services/api';

import logo from '../assets/logo.png';

export default function Devolver({ history }){
    const [username, setUsername] =useState('');

    async function handleCadastrar(e){
        e.preventDefault();


        history.push(`/cadastro`);
    }

    return(
        <div className="login-container">
            <a href="/"> 
            <img src={logo} alt="Optimus" />
            </a>
            <form onSubmit={handleCadastrar}>
                <h2>Seu projeto requer alterações</h2>
                <h1>Sua proposta requer alterações nos seguintes tópicos:</h1>
                <h1>a)</h1>Lorem ipsum id tellus potenti ullamcorper interdum facilisis molestie mollis dui, vehicula laoreet ullamcorper dictumst nec elit eu in elit vehicula non.
                <h1>b)</h1>Euismod sit diam consectetur tristique risus at tristique sed, nostra tempor euismod ultricies magna laoreet neque...<br />
                <h1>.</h1>

                <h1>Por favor, faça o upload do arquivo atualizado</h1>
                <input 
                    placeholder="Insira seu arquivo"
                    type = "file"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                /> 

                
                <button onClick={handleCadastrar} type="cadastrar">Enviar</button>
            </form>
        </div>
    );
}