import React, { useState } from 'react';

import './styles.css'

import api from '../services/api';

import logo from '../assets/logo.png';

export default function AnaliseProjeto({ history }){
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
                <div class="form-inline"><h2>Análise Inicial</h2></div>
                <div class="form-inline"><h1>Proposta foi enviada em meio digital e por escrito?</h1></div>
                <div class="form-inline"><input type="radio" name="enviada" />Sim</div>
                <div class="form-inline"><input type="radio" name="enviada" />Não. Nesse caso, não será avaliada</div>
                <div class="form-inline"><h1>Proposta de Projeto escrita em consonância com a formalística prevista na legislação X?</h1></div>
                <div class="form-inline"><input type="radio" name="proposta" />Sim. Encaminhar para o Colegiado/Conselho/Comissão Técnico-Científico</div>
                <div class="form-inline"><input type="radio" name="proposta" />Parcialmente. Devolver a Gerente da Proposta do Projeto para adequações</div>
                <div class="form-inline"><input type="radio" name="proposta" />Não. Encerrar e arquivar a Proposta</div>
                
                <textarea 
                    placeholder="Observações"
                    type = "text"
                />         
                <button onClick={handleCadastrar} type="cadastrar">Enviar</button>
            </form>
        </div>
    );
}