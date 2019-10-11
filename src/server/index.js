const express = require("express");
const app = express();
// const socket = require("socket.io");
const PORT = 3001;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// const io = socket(server);
