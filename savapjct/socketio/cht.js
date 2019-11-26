var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);


// WARNING: app.listen(80) will NOT work here!

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/cht.html');
});

io.on('connection', function (socket) {
  socket.emit('news', '{ hello: world }');
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

server.listen(4000);