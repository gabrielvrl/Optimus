import React, { useState } from 'react';
import './AnaliseProjeto.css';

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
                {/*<input 
                    placeholder="Proposta foi enviada em meio digital e por escrito?"
                    type = "file"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />*/}
                Proposta foi enviada em meio digital e por escrito?<br />
                <input type="radio" name="enviada" />Sim<br />
                <input type="radio" name="enviada" />Não. Nesse caso, não será avaliada<br /><br />
                Proposta de Projeto escrita em consonância com a formalística prevista na legislação X?<br />
                <input type="radio" name="proposta" />Sim. Encaminhar para o Colegiado/Conselho/Comissão Técnico-Científico<br />
                <input type="radio" name="proposta" />Parcialmente. Devolver a Gerente da Proposta do Projeto para adequações<br />
                <input type="radio" name="proposta" />Não. Encerrar e arquivar a Proposta<br /><br />
                
                <textarea 
                    placeholder="Observações"
                    type = "text"
                />         
                <button onClick={handleCadastrar} type="cadastrar">Enviar</button>
            </form>
        </div>
    );
}