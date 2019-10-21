const { Schema, model } = require('mongoose');

const ProjetoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    resumo: {
        type: String,
        required: true,
    },
    arquivo: {
        type: String,
    },
}, {
    timestamps:true,
    // CreatedAt, UptadedAt
}
);

module.exports = model('Projeto', ProjetoSchema);