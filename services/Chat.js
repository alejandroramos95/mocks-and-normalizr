const mongoose = require('mongoose')
const MensajesModel = require('../models/MensajesModel.js')

module.exports = class Chat {
  constructor() {
    this.url =
      'mongodb+srv://coderBackend:coderBackendPW@clustercoderbackend.tct9by1.mongodb.net/EntregableNormalizr?retryWrites=true&w=majority'
    this.mongodb = mongoose.connect
  }

  async conectarDB() {
    await this.mongodb(this.url);
  }

  // Devolver array Normalizr
  async getAll() {
    await this.conectarDB()
    return await MensajesModel.find() // guardo el find en una variable, lo normalizo y lo retorno
  }

  async save(mensaje) {
    await this.conectarDB()
    // Chequeo que el producto se haya cargado con un console log
    // console.log('item nuevo contenedor', itemNuevo)
    const nuevoMensaje = new MensajesModel(mensaje)
    return await nuevoMensaje.save()
  }
}
