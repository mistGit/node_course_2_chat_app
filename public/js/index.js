var socket = io();
var sendMessage = (from, text) => {
  socket.emit("createMessage", {from, text});
};

socket.on("connect", function () {
  console.log("connected to server");
});

socket.on("disconnect", function () {
  console.log("disconnected from the server");
});

socket.on("newMessage", function (message) {
  console.log(message);
});
