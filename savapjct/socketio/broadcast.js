var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendfile('index.html');
});

// var clients = 0;
// io.on('connection', function(socket) {
//    clients++;
//    io.sockets.emit('broadcast',{ description: clients + ' clients connected!'});
//    socket.on('disconnect', function () {
//       clients--;
//       io.sockets.emit('broadcast',{ description: clients + ' clients connected!'});
//    });
// });

var clients = 0;
io.on('connection', function(socket) {
   clients++;
   socket.emit('newclientconnect',{ description: 'Hey, welcome!'});
   socket.broadcast.emit('newclientconnect',{ description: clients + ' clients connected!'})
   socket.on('disconnect', function () {
      clients--;
      socket.broadcast.emit('newclientconnect',{ description: clients + ' clients connected!'})
   });
});

http.listen(3000, function() {
   console.log('listening on localhost:3000')
})