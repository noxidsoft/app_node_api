/*
*
* Primary file for the API
*
*/

// dependencies
const http = require('http')
const url = require('url')

// the server should respond to all request with a string
const server = http.createServer(function(req, res){

  // get the url and parse interval
  const parsedUrl = url.parse(req.url, true)

  // get the path from the url
  const path = parsedUrl.pathname
  const trimmedPath = path.replace(/^\/+|\/+$/g,'')

  // send the response
  res.end('Hello Node World\n')

  // log the request path
  console.log(`Request received on path: ${trimmedPath}`)


})

// start the server, and have it listen on port 3000
server.listen(3000, function() {
  console.log('the server is listening on port 3000')
})
