const connection = require ('../infrastructure/connection');

class Comentario {
  adiciona(comentario, res) {

    const sql = 'INSERT INTO Comentarios SET ?'

    connection.query(sql, comentario, (erro, resultados) => {
      if(erro) {
        res.json(erro)
      } else {
        res.json(resultados)
      }
    })
  }
}

module.exports = new Comentario