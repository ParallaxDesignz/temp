const express = require("express");
const app = express();

app.use(express.json());

const db = require("./db.json");

app.use("/get-flight", (req, res) => {
  const { source, destination, date } = req.query;

  const data = db.data.find((item) => {
    return (
      item.source.toLowerCase() === source.toLowerCase() &&
      item.destination.toLowerCase() === destination.toLowerCase() &&
      item.date === date
    );
  });

  return res.json({
    message: "get data successfully",
    data: data?.fligts,
  });
});

app.listen(8000, () => {
  console.log("Server is running");
});
