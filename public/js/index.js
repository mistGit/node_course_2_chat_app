var socket = io();
var sendMessage = (message) => {
  socket.emit("createMessage", message);
};

socket.on("connect", function () {
  console.log("connected to server");

  socket.emit("createMessage", {
    from: "Andrew",
    text: "Hey. This is Andrew."
  });

});

socket.on("disconnect", function () {
  console.log("disconnected from the server");
});

socket.on("newMessage", function (message) {
  console.log("New email recieved:", message);
});
