module.exports = (io) =>  io.on('connection', (socket) => {
  socket.on('opinion', (opinion) => {

    io.emit('sendOpinion', opinion);

  });
});
