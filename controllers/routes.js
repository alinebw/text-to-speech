const Comentario = require('../models/comentarios');
const { join } = require('path');



module.exports = app => {
  app.get('/', (req, res) => res.sendFile(join(__dirname, '..', 'public', '/index.html')))

  app.post('/home', (req) => {

    const comentario = req.body

    Comentario.adiciona(comentario) 
    
  })
  
  app.get('/home', (req, res) => {

    Comentario.lista(res)
  })

};