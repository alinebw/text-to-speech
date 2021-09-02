const customExpress = require('./config/customExpress');

const connection = require('./infrastructure/connection');

const Tabelas = require('./infrastructure/schema');

connection.connect(erro => {
  if(erro) {
    console.log(erro)
  } else {
    console.log('conectado com sucesso')

    Tabelas.init(connection)
    
    const app = customExpress()

app.listen(3000, () => console.log('servidor rodando na porta 3000'))
  }
});





