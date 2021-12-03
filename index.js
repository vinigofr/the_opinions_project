const express = require('express');

const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',  //url aceita pelo cors
    methods: ['GET', 'POST'],  //Métodos aceitos pela url
  },
});

app.use(express.static(__dirname + '/public'));

require('./sockets/main')(io);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/main.html');
});

http.listen(3000, () => console.log('Funfando na porta 3000'));