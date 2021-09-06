const connection = require ('../infrastructure/connection');

class Comentario {
  adiciona(comentario, res) {

    const sql = 'INSERT INTO Comentarios SET ?'

    connection.query(sql, comentario, (erro, resultados) => {
      if(erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json({...comentario})
      }
    })
  }

  lista(res) {
    const sql = 'SELECT * FROM Comentarios'

    conexao.query(sql, (erro, resultados) => {
        if (erro) {
            res.status(400).json(erro)
        } else {
            res.status(200).json(resultados)
        }
    })
  }
}



module.exports = new Comentario