var http = require('http');

var server = http.createServer(function (request, response) {
    response.end("Hello TheTrav\n");
});

server.listen(8000);