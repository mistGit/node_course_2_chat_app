var socket = io();
var sendMessage = (from, text) => {
  socket.emit("createMessage", {from, text}, function(data) {
    console.log(data);
  });
};

socket.on("connect", function () {
  console.log("connected to server");
});

socket.on("disconnect", function () {
  console.log("disconnected from the server");
});

socket.on("newMessage", function (message) {
  console.log(message);
  var li = jQuery("<li></li>");
  li.text(`${message.from}: ${message.text}`);

  jQuery("#messages").append(li);
});

jQuery("#message-form").on("submit", function (e) {
  e.preventDefault();
  socket.emit("createMessage", {
    from: "User",
    text: jQuery("[name=message]").val()
  }, function(){
    jQuery("[name=message]").val("");
  });
});
