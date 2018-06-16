const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const {generateMessage} = require("./utils/message");
const publicPath = path.join(__dirname + "/../public");
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

io.on("connection", (socket) => {
  console.log("device connected");

  socket.emit("newMessage", generateMessage("Admin", "Welcome to the chat app."));

  socket.broadcast.emit("newMessage", generateMessage("Admin", "New user joined."));


  socket.on("disconnect", () => {
    console.log("disconnected");
  });

  socket.on("createMessage", (message) => {
    io.emit("newMessage", generateMessage(message.from, message.text))
    // console.log(message);
    // io.emit("newMessage", message);
    // socket.broadcast.emit("newMessage", message);
  });

});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`)
});
