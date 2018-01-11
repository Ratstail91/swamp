//includes
var express = require('express');
var app = express();
var http = require('http').Server(app);

var formidable = require('express-formidable');
var fs = require('fs');
var io = require('socket.io')(http);
var path = require('path');

//access the static files and folders
var workingDir = path.resolve(__dirname + '/../public_html');

app.get('/', (req, res) => {
  res.sendFile(workingDir + '/index.html');
});

app.use('/app.bundle.js', express.static(workingDir + '/app.bundle.js'));
app.use('/styles', express.static(workingDir + '/styles'));

//middleware
app.use(formidable());

//utility functions
function findRooms() {
  var availableRooms = [];
  var rooms = io.sockets.adapter.rooms;
  if (rooms) {
    for (var room in rooms) {
      if (!rooms[room].hasOwnProperty(room)) {
        availableRooms.push(room);
      }
    }
  }
  return availableRooms;
};

var defaultRoom = 'default';

//socket system
io.sockets.on('connection', (client) => {
  console.log('a client connected');

  //join room
  client.join(defaultRoom);

  //debug
  var rooms = findRooms();
  io.sockets.emit('jukebox list', JSON.stringify(rooms));

  //callbacks
  client.on('disconnect', () => {
    console.log('a client disconnected');

    //debug
    var rooms = findRooms();
    io.sockets.emit('jukebox list', JSON.stringify(rooms));
  })

  client.on('jukebox list', (msg) => {
    var rooms = findRooms();
    client.emit('jukebox list', JSON.stringify(rooms));
  });

  client.on('jukebox join', (msg) => {
    client.join(msg);
  });

  client.on('jukebox join which', () => {
    client.emit('jukebox join', client.rooms[1]);
  });

  //TODO: MORE
});

//start listening
http.listen(3001, () => {
  console.log('listening to *:3001');
});
