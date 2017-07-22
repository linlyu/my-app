var http = require('http');
var path = require('path');
var express = require('express');
var app = express();

var json = {"name1":"testtest"};



var server = http.createServer(app);
var io = require('socket.io')(server);
io.on('connection', function (socket) {
    socket.emit('msg', { msg: JSON.stringify(json) });
    socket.on('message',function(msg){
		console.log(msg);
    	socket.emit('msg', { msg: "you sent : "+msg });
    })
});

server.listen(4220);