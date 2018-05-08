var db = require('./connection')

module.exports = {
  getCharlies: () => db('charlies')
}
