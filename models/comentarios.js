const connection = require ('../infrastructure/connection');

class Comentario {
  adiciona(comentario, res) {

    const sql = 'INSERT INTO Comentarios SET ?'

    connection.query(sql, comentario, (erro, resultados) => {
      if(erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json({ ...comentario })
      }
    })
  }

  lista(comentario, res) {
    const sql = 'SELECT coment FROM Comentarios'

    conexao.query(sql, comentario, (erro, resultados) => {
        if (erro) {
            res.status(400).json(erro)
        } else {
            res.status(200).json(resultados)
        }
    })
  }

  altera(comentario, res) {
    
    const sql = 'UPDATE Comentarios SET ? WHERE coment=?'

    conexao.query(sql, comentario, (erro, resultados) => {
        if (erro) {
            res.status(400).json(erro)
        } else {
            res.status(200).json({ ...comentario })
        }
    })
}

  deleta(comentario, res) {
  const sql = 'DELETE FROM COmentarios WHERE coment=?'

  conexao.query(sql, comentario, (erro, resultados) => {
      if (erro) {
          res.status(400).json(erro)
      } else {
          res.status(200).json({ ...comentario })
      }
  })
}
}



module.exports = new Comentario