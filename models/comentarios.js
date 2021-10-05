const connection = require ('../infrastructure/connection');

class Comentario {
  adiciona(comentario) {

    const sql = 'INSERT INTO Comentarios SET ?'

    connection.query(sql, comentario)
  }

  lista(res) {

    const sql = 'SELECT coment FROM Comentarios'

    connection.query(sql, (erro, resultados) => {
        if (erro) {
            res.status(400).json(erro)
        } else {
            res.status(200).json(resultados)
        }
    })
  }
}

module.exports = new Comentario