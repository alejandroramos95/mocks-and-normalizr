const mongoose = require('mongoose')

const mensajesSchema = new mongoose.Schema({
  author: {
    id: { type: String, required: true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: { type: String, required: true },
    alias: { type: String, required: true },
    avatar: { type: String, required: true },
  },
  text: { type: String, required: true },
})

module.exports = mongoose.model('mensajes', mensajesSchema)

/* ({ 
    author: {
        id: {type: Number, required: true}, 
        nombre: {type: String, required: true}, 
        apellido: {type: String, required: true}, 
        edad: {type: Number, required: true}, 
        alias: {type: String, required: true},
        avatar: {type: String, required: true}
    },
    text: {type: String, required: true}
}); */
