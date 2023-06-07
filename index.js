const express = require("express");
const app = express();

app.use(express.json());

const WebSocket = require("ws");

app.listen(8000, () => {
  console.log("Server is running");

  const ws = new WebSocket("wss://stream.binance.com:9443/ws/luncusdt@trade");

  ws.onmessage = (event) => {
    const stockObject = JSON.parse(event.data);
    const currentPrice = parseFloat(stockObject.p).toFixed(8);

    console.log(currentPrice);
  };
});
