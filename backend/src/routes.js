const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const ProjetoController = require('./controllers/ProjetoController');

const routes = express.Router();

// passo o endereco que ela vai, exemplo: localhost:3333/vaiaqui
//routes.get('/' , (req, res) => {
//    return res.send('opa world')
//});

routes.post('/cadastrousuario', UsuarioController.store);
routes.post('/cadastroprojeto', ProjetoController.store);

module.exports = routes;