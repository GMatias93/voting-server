var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || '4000';

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(path.normalize(__dirname + '/')))
    .get('/', function(req, res) {
        res.sendFile(path.join(__diname + 'index.js'));
    });

var server = app.listen(port ,function() {
    var host = server.address().address;
});
