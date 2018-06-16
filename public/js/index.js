var socket = io();
var sendMessage = (message) => {
  socket.emit("createMessage", message);
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
