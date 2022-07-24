'use strict';
var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 1337;

fs.readdir('/path/to/html/files', function (err, files) {
    files
        .filter(function (file) { return file.substr(-5) === '.html'; })
        .forEach(function (file) { fs.readFile(file, 'utf-8', function (err, contents) { inspectFile(contents); }); });
});

function inspectFile(contents) {
    if (contents.indexOf('data-template="home"') != -1) {
        // do something
    }
}