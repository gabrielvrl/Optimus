import React, { useState } from 'react';
import './Login.css';

import api from '../services/api';

import logo from '../assets/logo.png';

export default function Login({ history }){
    const [username, setUsername] =useState('');
    const [name, setName] =useState('');
    const [cargo, setCargo] =useState('');
    /*const [senha, setSenha] =useState('');*/

    async function handleCadastrar(e){
        e.preventDefault();

        history.push(`/cadastro`);
    }

    async function handleSubmit(e){
        /* console.log("chegou ate aqui 1"); */
        e.preventDefault();
        const response = await api.post('/cadastrousuario', {
            username,
            name,
            cargo,
        });

        const { _id } = response.data;
        console.log(response.data)
        
        history.push(`/main/${_id}`);
    }

    return(
        <div className="login-container">
            <a href="/"> 
            <img src={logo} alt="Optimus" />
            </a>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Digite seu usuário"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input 
                    placeholder="Digite sua senha"
                />
                <button onClick={handleSubmit} type="submit">Entrar</button>        
                <button onClick={handleCadastrar} type="cadastrar">Cadastra-se</button>
                <button type="cadastrar">Esqueci minha senha</button>
            </form>
        </div>
    );
}