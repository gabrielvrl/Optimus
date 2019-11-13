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
                <div class="form-inline"><h2>Avaliador</h2></div>
                <div class="form-inline"><h1>1) Proposta de acordo com as diretrizes científicas previstas no edital?</h1></div>
                <div class="form-inline"><input type="radio" name="enviada" /> Sim</div>
                <div class="form-inline"><input type="radio" name="enviada" /> Não</div>
                <div class="form-inline"><h1>2) Proposta com potencial técnico-científico:</h1></div>
                <div class="form-inline"><input type="radio" name="enviada" /> Relevante</div>
                <div class="form-inline"><input type="radio" name="enviada" /> Irrelevante</div>
                <div class="form-inline"><h1>3) Nível de maturidade</h1></div>
                <div class="form-inline"><h1>Calculadora TRL</h1></div>
                <select>
                    <option value="um">1</option>
                    <option value="dois">2</option>
                    <option selected value="tres">3</option>
                    <option value="quatro">4</option>
                    <option value="cinco">5</option>
                    <option value="seis">6</option>
                    <option value="sete">7</option>
                    <option value="oito">8</option>
                    <option value="nove">9</option>
                </select>
                <div class="form-inline"><h1>4) Decisão</h1></div>
                <div class="form-inline"><input type="radio" name="enviada" /> Aceitar</div>
                <div class="form-inline"><input type="radio" name="enviada" /> Proceder ajustes</div>
                <div class="form-inline"><input type="radio" name="enviada" /> Recusar totalmente</div>

                <textarea 
                    placeholder="Observações"
                    type = "text"
                />  

                <button onClick={handleCadastrar} type="cadastrar">Enviar</button>
            </form>
        </div>
    );
}