$(function() {
    //make connection
    var socket = io.connect('http://localhost:3000/');

    //buttons and inputs
    var input_message = $("#message");
    var button_send_message = $("#send_message");
    var chatroom = $("#chatroom");
    var feedback = $("#feedback");

    //Emit message

    button_send_message.click(function() {
        socket.emit('send_message', { message: input_message.val() });
        input_message.val('');
    });

    //Listen on new_message
    socket.on('broadcast_message', function(data) { //cliente
        console.log(data.username + ': ' + data.message);

        chatroom.append("<p class='message'>" + data.username + ': ' + data.message + "</p>")
    })
});