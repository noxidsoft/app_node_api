/*
*
* Primary file for the API
*
*/

// dependencies
const http = require('http')

// the server should respond to all request with a string
const server = http.createServer(function(req, res){
  res.end('Hello Node World\n')
})

// start the server, and have it listen on port 3000
server.listen(3000, function() {
  console.log('the server is listening on port 3000')
})
