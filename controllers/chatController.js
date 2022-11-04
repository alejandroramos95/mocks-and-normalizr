const Chat = require('../services/Chat.js')
const io = require("../server.js")

const chat = new Chat()

io.on('connection', async (socket) => {
  const messages = await chat.getAll()

  socket.emit('messages', messages)

  socket.on('new-message', async (data) => {
    let parsedMensaje = {
      author: {
        id: data.id,
        nombre: data.nombre,
        apellido: data.apellido,
        edad: data.edad,
        alias: data.alias,
        avatar: data.avatar,
      },
      text: data.text,
    }
    await chat.save(parsedMensaje)
    io.sockets.emit('messages', await chat.getAll())
  })
})
