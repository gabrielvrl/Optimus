import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import Cadastro from './pages/Cadastro';
import CadastrarProjeto from './pages/CadastrarProjeto';
import AnaliseProjeto from './pages/AnaliseProjeto';

export default function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            {/* A pagina MAIN eh a pagina do usuario logado, o argumento :name eh o nome do usuario */}
            <Route path="/main/:name" component={Main} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/cadastrarprojeto" component={CadastrarProjeto} />
            <Route path="/analiseprojeto" component={AnaliseProjeto} />
        </BrowserRouter>
    );
}