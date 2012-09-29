var http = require('http');

var server = http.createServer(function (request, response) {
    response.end("Hello World\n");
});

server.listen(8000);