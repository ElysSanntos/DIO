// responsavel por como o user  vai acessar o controller

const express = require('express')
const promptController =  require('../controllers/prompt-controller')
const routes = express.Router()

routes.post('/api/prompt', promptController.sendText)

module.exports = routes;
