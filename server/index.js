//This is setting the port for the server, when you run 'npm run dev' and such.

var server = require('./server')

var port = process.env.PORT || 3000 //Now heroku can use whatever port it likes
//on localhost, it'd be 3000 tho.

server.listen(port, function () {
  console.log('listening in on port 3000')
})

