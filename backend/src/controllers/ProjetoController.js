const Projeto = require('../models/Projeto');

module.exports = {
    async store(req, res) {
        const { name, status, resumo, arquivo } = req.body;
        console.log(req.body.status);
    
        const projExists = await Projeto.findOne({ name: name, status: status, resumo: resumo, arquivo: arquivo });
    
        if(projExists){
            return res.json(projExists);
        }
    
        //API? const response = await axios.get(`link da api/${username}`);
        const projeto = await Projeto.create({
            name,
            status,
            resumo,
            arquivo
        })

    
        return res.json({ projeto });
    }
};