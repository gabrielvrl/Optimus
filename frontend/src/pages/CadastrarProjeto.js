import React, { useState } from 'react';
import './CadastrarProjeto.css';

import api from '../services/api';

import logo from '../assets/logo.png';

export default function CadastrarProjeto({ history }){
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
                <h1>Informações gerais do seu projeto</h1>
                <h2>Título:</h2>
                <input 
                    placeholder="Digite o título do seu projeto"
                    type = "text"
                />

                <h2>Resumo:</h2>
                <input 
                    placeholder="Digite seu resumo"
                    type = "text"
                />

                <h2>Upload do seu arquivo:</h2>
                <input 
                    placeholder="Insira seu arquivo"
                    type = "file"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                /> 

                <button onClick={handleCadastrar} type="cadastrar">Cadastrar Projeto</button>
            </form>
        </div>
    );
}