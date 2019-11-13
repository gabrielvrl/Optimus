import React, { useState } from 'react';

import './styles.css'

import api from '../services/api';

import logo from '../assets/logo.png';

export default function AnaliseCTC({ history }){
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
            <form>
                <div class="form-inline"><h2>Análise pelo CTC e avaliador "ADHOC"</h2></div>
                <div class="form-inline"><h1>Encaminhar para:</h1></div>
                <div class="form-inline"><input type="radio" name="enviada" /> XXX - Membro do CTC</div>
                <div class="form-inline"><input type="radio" name="enviada" /> YYY - Membro do CTC</div>
                <div class="form-inline"><input type="radio" name="enviada" /> ZZZ - Membro do CTC</div>
                <div class="form-inline"><input type="radio" name="enviada" /> KKK - Avaliador "ADHOC"</div>
                <div class="form-inline"><input type="radio" name="enviada" /> PPP - Avaliador "ADHOC"</div>

                <button onClick={handleCadastrar} type="cadastrar">Enviar</button>
            </form>
        </div>
    );
}