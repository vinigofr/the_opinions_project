const socket = window.io();

const ul = document.getElementById('opinion-list');
const sendButton = document.getElementById('send-button');
const opinionInput = document.getElementById('opinion-input');
const nameInput = document.getElementById('name-input');

const insertOpinion = ({ name, opinion }) => {
  const newOpinion = `${name} disse: ${opinion}.`;
  const li = document.createElement('li');
  li.innerText = newOpinion;
  ul.appendChild(li);
  opinionInput.value = '';
  nameInput.value = '';
};

socket.on('sendOpinion', (opinion) => {
  insertOpinion(opinion);
});

sendButton.addEventListener('click', () => {
  const opinion = {
    name: nameInput.value,
    opinion: opinionInput.value,
  };

  socket.emit('opinion', opinion);
 
});