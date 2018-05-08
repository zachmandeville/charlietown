const router = require('express').Router()

var charliesDb = require('../db/charlies')

router.get('/', (req,res) => {
  charliesDb.getCharlies()
    .then(charlies => res.json(charlies))
})

module.exports = router
