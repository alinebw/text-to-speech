const Comentario = require('../models/comentarios');
const { join } = require('path');



module.exports = app => {
  app.get('/home', (req, res) => res.sendFile(join(__dirname, '..', 'public', '/index.html')))

  app.post('/home', (req, res) => {

    const comentario = req.body

    Comentario.adiciona(comentario, res)
  })

  app.get('/home', (req, res) => {
    Comentario.lista(res)
  })

};