import React, { useState } from 'react';

import './styles.css'

import api from '../services/api';

import logo from '../assets/logo.png';

export default function AprovarUsuario({ history }){
    const [username, setUsername] =useState('');

    async function handleCadastrar(e){
        e.preventDefault();


        history.push(`/cadastro`);
    }

    return(
        <div className="aprovar-container">
            <a href="/"> 
            <img src={logo} alt="Optimus" />
            </a>
            <form onSubmit={handleCadastrar}>
                <h2>Aprovar tipo de usuário</h2><br />
                <h1>Diretor da ICT</h1><input type="checkbox" />
                <h1>Gerente de projeto</h1><input type="checkbox" />
                <h1>Avaliador Setor de Projetos</h1><input type="checkbox" />
                <h1>Avaliador CTC</h1><input type="checkbox" />
                <h1>Membro OCS</h1><input type="checkbox" />
                <h1>Avaliador "AD HOC"</h1><input type="checkbox" />
                <h1>Stakeholders</h1><input type="checkbox" />
                <h1>Outros</h1><input type="checkbox" />

                <button onClick={handleCadastrar} type="cadastrar">Enviar</button>
            </form>
        </div>
    );
}