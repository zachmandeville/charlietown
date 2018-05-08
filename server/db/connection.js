var environment = process.env.NODE_ENV || 'development' //use knexfile's development settings unless the env process says otherwise (e.g. heroku)
var config = require('../../knexfile.js')[environment]
var connection = require('knex')(config)

module.exports = connection
