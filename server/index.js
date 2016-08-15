(function () {
    'use strict';
    var port = process.env.PORT || 8080;
	var app = require('express')();
	var path = require('path');
	var http = require('http').Server(app);
	var io = require('socket.io')(http);
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'ejs');
	app.get('/', function (req, res) {
		res.render('home.ejs');
	});

	io.on('connection', function(socket){
	socket.on('message', function(msg){
		io.emit('message', msg);
	});
	});

	http.listen(port, function () {
		console.log('listening on *:%s',port);
	})
})();