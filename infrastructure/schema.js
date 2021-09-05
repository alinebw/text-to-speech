class Tabelas {
  init(connection) {
    this.connection = connection //executa conexão

    this.criarComentarios() //executa criação de tabela
  }
  criarComentarios() {
    const sql = 'CREATE TABLE IF NOT EXISTS Comentarios (id int NOT NULL, coment varchar (254) NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at DATETIME DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (id))'

    this.connection.query(sql, erro => {
      if(erro) {
        console.log(erro)
      } else {
        console.log('Tabela de comentarios criada com sucesso')
      }
    })
  }
}

module.exports = new Tabelas;