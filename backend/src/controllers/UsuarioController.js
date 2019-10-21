const Usuario = require('../models/Usuario');

module.exports = {
    async store(req, res) {
        const { username, name, cargo } = req.body;
        console.log(req.body.cargo);
    
        const userExists = await Usuario.findOne({ username: username, name: name, cargo: cargo });
    
        if(userExists){
            return res.json(userExists);
        }
    
        //API? const response = await axios.get(`link da api/${username}`);
        const usuario = await Usuario.create({
            username,
            name,
            cargo
        })

    
        return res.json({ usuario });
    }
};