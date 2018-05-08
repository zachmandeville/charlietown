//this is starting up a basic backend server that takes a route for api and directs it to your
//functions around api.

var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/charlies', require('./routes/charlies'))

module.exports = server


