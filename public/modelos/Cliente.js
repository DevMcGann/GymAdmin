const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
    nombre: {
        type: String,
        trim : true
    },
    apellido: {
        type: String,
        trim : true
    },
    dni: {
        type: String,
        trim: true
    },
    observaciones:{
        type: String
    },
    fecha_inicio: {
        type:Date,
        default:Date.now
    },
    fecha_pago:{
        type:Date,
        default:Date.now
    },
    deudor:{
        type:Boolean,
        default:false
    },
    imagen:{
        type:String
    }
});

module.exports = mongoose.model('clientes', clienteSchema);