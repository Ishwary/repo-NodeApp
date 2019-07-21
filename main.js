// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});  
  response.write(html);
  response.write(head);
  response.write(body);
  response.write("Hello Ishwar");
  response.write(/body);
  response.write(/head);
  response.write(/html);
  response.end(); 
});

// listen on localhost:8000
server.listen(8000);
console.log("Server listening on port 8000 :  http://127.0.0.1:8000/");
