'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var index = fs.readFileSync('index.html');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(index);
}).listen(port);
