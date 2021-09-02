const Comentario = require('../models/comentarios')


module.exports = app => {
  app.get('/home', (req, res) => 
  res.send('você está na rota do conversor e está realizando um GET'))

  app.post('/home', (req, res) => {

    const comentario = req.body

    Comentario.adiciona(comentario, res)
    
    res.send('Post Comentario')
  })
};