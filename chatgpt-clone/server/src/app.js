const express = require('express')  // Import de bibliotecas
const cors = require('cors')
const routes = require('./routes/routes')

require("dotenv").config() //puxar as configurações do arquivo dotenv

const app = express() //armazena uma instancia do express

// Configuração do CORS para permitir solicitações de http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Habilita o envio de cookies na solicitação
}));



//Configurações para informar o que o app vai utilizar
app.use(express.json())
app.use(routes)

// const PORT2 = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });

module.exports = app //exporta o APP
