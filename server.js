var http = require('http');

var port = process.env.PORT || 8000;

var server = http.createServer(function (request, response) {
    response.end("Hello TheTrav\n");
});

server.listen(port);