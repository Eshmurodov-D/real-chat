const WebSocket = require('ws');
const PORT = process.env.PORT || 8080; // Render beradigan portni ishlatamiz

const server = new WebSocket.Server({ port: PORT }, () => {
  console.log(`WebSocket server ${PORT}-portda ishlayapti...`);
});

server.on('connection', (socket) => {
  console.log('Mijoz ulandi!');
  
  socket.on('message', (message) => {
    console.log(`Xabar: ${message}`);
    socket.send(`Qabul qilindi: ${message}`);
  });

  socket.on('close', () => {
    console.log('Mijoz uzildi.');
  });
});
