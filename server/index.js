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

//socket system
io.sockets.on('connect', (client) => {
  console.log('a client connected');

  client.on('disconnect', () => {
    console.log('a client disconnected');
  })

  //TODO: MORE
});

//start listening
http.listen(3001, () => {
  console.log('listening to *:3001');
});
