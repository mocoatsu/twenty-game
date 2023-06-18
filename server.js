const net = require("net");
const clients = [];
let total = 0;
let turn = 0;

function handleData(socket, data) {
  if (socket !== clients[turn % 2]) {
    socket.write("Wait for your turn!\n");
    return;
  }

  total += parseInt(data, 10);
  if (total >= 20) {
    socket.write("You lose!\n");
    clients.forEach((client) => {
      if (client !== socket) {
        client.write("You win!\n");
        client.end();
      }
    });
    socket.end();
    total = 0;
    turn = 0;
  } else {
    turn++;
    clients.forEach((client) => {
      if (client === socket) {
        client.write(`Current total is ${total}. Wait for your turn.\n`);
      } else {
        client.write(`Current total is ${total}. Your turn!\n`);
      }
    });
  }
}

function startGame() {
  if (clients.length === 2) {
    clients[0].write("Game start! Your turn!\n");
  }
}

const server = net.createServer((socket) => {
  clients.push(socket);
  socket.write("Welcome to the game! Wait for another player to start.\n");

  socket.on("data", (data) => handleData(socket, data));

  startGame();
});

server.listen(12345, "localhost", () => {
  console.log("Server is listening on localhost:12345");
});