const express = require("express");
const app = express();
const http = require("http");
const WebSocket = require("ws");

const server = http.createServer(app);

app.use(express.json());

server.listen(9443, () => {
  console.log("Server is running");

  const ws = new WebSocket("wss://stream.binance.com:9443/ws/luncusdt@trade");

  ws.onmessage = (event) => {
    const stockObject = JSON.parse(event.data);
    const currentPrice = parseFloat(stockObject.p).toFixed(8);

    console.log(currentPrice);
  };
});
