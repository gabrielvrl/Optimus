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
                <div class="form-inline"><h2>Aprovar tipo de usuário</h2><br /></div>
                <div class="form-inline"><h1></h1><input type="checkbox" />Diretor da ICT</div>
                <div class="form-inline"><h1></h1><input type="checkbox" />Gerente de projeto</div>
                <div class="form-inline"><h1></h1><input type="checkbox" />Avaliador Setor de Projetos</div>
                <div class="form-inline"><h1></h1><input type="checkbox" />Avaliador CTC</div>
                <div class="form-inline"><h1></h1><input type="checkbox" />Membro OCS</div>
                <div class="form-inline"><h1></h1><input type="checkbox" />Avaliador "ADHOC"</div>
                <div class="form-inline"><h1></h1><input type="checkbox" />Stakeholders</div>
                <div class="form-inline"><h1></h1><input type="checkbox" />Outros</div>

                <button onClick={handleCadastrar} type="cadastrar">Enviar</button>
            </form>
        </div>
    );
}