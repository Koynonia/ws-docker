const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose

// Databse
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')

// Teste
server.get('/', (req, res, next) => res.send('> [node] Backend funcionando...'))

// Start Server
server.listen(3000)