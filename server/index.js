var express = require('express');
var path = require('path');

var app = express();

var server = require('http').createServer(app);

var io = require('socket.io').listen(server);

var users = [];

var connections = [];

var port = 3005

server.listen(process.env.PORT || port);
console.log(`server connected to ${port}`)

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/client/dist/index.html')
// });
app.use(express.static(path.join(__dirname, '../client/dist/')));

io.sockets.on('connection', (socket)=>{
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);

  // Disconnect
  socket.on('disconnect', function(data){
    if(!socket.username){
      return;
    }
    users.splice(users.indexOf(socket.username), 1);
    updateUsernames();
    connections.splice(connections.indexOf(socket), 1)
    console.log('Disconnected: %s sockets connected', connections.length);
  });

  // Send message:
  socket.on('send message', function(data){
    console.log(data)
    io.sockets.emit('new message', {msg: data});
  })

  // New user:
  socket.on('new user', function(data, callback){
    callback(true);
    socket.username=data;
    users.push(socket.username);
    updateUsernames();
  });
  function updateUsernames(){
    io.sockets.emit('get users', users);
  }
});
