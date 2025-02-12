const WebSocket = require("ws");

const PORT = process.env.PORT || 8080;
const server = new WebSocket.Server({ port: PORT });

server.on("connection", (ws) => {
    console.log("Yangi mijoz ulandi!");

    ws.on("message", (message) => {
        console.log("Xabar: ", message.toString());

        // Barcha mijozlarga xabarni jo‘natish
        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });

    ws.on("close", () => console.log("Mijoz chiqdi!"));
});

console.log(`WebSocket server ${PORT}-portda ishlayapti...`);
