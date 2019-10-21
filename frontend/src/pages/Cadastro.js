import React, { useState } from 'react';
import './Cadastro.css';

import api from '../services/api';

import logo from '../assets/logo.png';

export default function Login({ history }){
    const [username, setUsername] =useState('');
    const [name, setName] =useState('');
    const [cargo, setCargo] =useState('');

    async function handleSubmit(e){
        e.preventDefault();

        const response = await api.post('/cadastrousuario', {
            username,
        });

        const { _id } = response.data;

        history.push(`/dev/${_id}`);
    }

    return(
        <div className="login-container">
            <a href="/"> 
            <img src={logo} alt="Optimus" />
            </a>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input 
                    placeholder="Digite seu usuário"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input 
                    placeholder="Digite sua senha"
                />
                <input 
                    placeholder="Digite seu cargo"
                    value={cargo}
                    onChange={e => setCargo(e.target.value)}
                />
                <button type="submit">Cadastrar-se</button>
            </form>
        </div>
    );
}