import React, { useState } from 'react';

import './styles.css'

import api from '../services/api';

import logo from '../assets/logo.png';

export default function PropostaAjustada({ history }){
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
                <h2>Essa proposta foi alterada</h2>
                <h1>Por favor, reavalie o projeto</h1>
                <h1>Proposta foi enviada em meio digital e por escrito?</h1>
                Sim<input type="radio" name="enviada" />
                Não. Nesse caso, não será avaliada<input type="radio" name="enviada" />
                <h1>Proposta de Projeto escrita em consonância com a formalística prevista na legislação X?</h1>
                Sim. Encaminhar para o Colegiado/Conselho/Comissão Técnico-Científico<input type="radio" name="proposta" />
                Parcialmente. Devolver a Gerente da Proposta do Projeto para adequações<input type="radio" name="proposta" />
                Não. Encerrar e arquivar a Proposta<input type="radio" name="proposta" />
                
                <textarea 
                    placeholder="Observações"
                    type = "text"
                />        
                <button onClick={handleCadastrar} type="cadastrar">Aprovada</button>
                <button onClick={handleCadastrar} type="cadastrar">Recusada</button>
            </form>
        </div>
    );
}