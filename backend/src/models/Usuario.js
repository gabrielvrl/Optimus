const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    //senha: {
        //type: String,
        //required: true,
    //},
    name: {
        type: String,
        required: true,
    },
    cargo: {
        type: String,
        required: true,
    },
}, {
    timestamps:true,
    // CreatedAt, UptadedAt
}
);

module.exports = model('Usuario', UsuarioSchema);