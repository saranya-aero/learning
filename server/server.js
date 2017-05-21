const path = require('path');
const publicPath =  path.join(__dirname, '../public');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 8000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

console.log(publicPath);
//console.log()

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log("New user connected");
});

 server.listen(8000, () =>{
   console.log(`Server is open at ${port}:`);
 });
