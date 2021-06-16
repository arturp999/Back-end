// require and instantiate express
var express = require('express');
var app = express();

app.set('view engine', 'ejs'); // set up ejs for templating

//middlewares
app.use(express.static('public'));

// express server
var server = app.listen(3000, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
});

// route
app.get('/', function(req, res) {
    res.render('index.ejs');
});

var io = require('socket.io')(server);

// Registar o evento Connection
io.on('connection', (socket) => {
    console.log("New user connected");
    // console.log(socket.id)
    socket.username = "User " + socket.id;
    console.log(socket.username)

    socket.on('disconnect', () => {
        console.log(socket.username + " has disconnected!");
    })

    socket.on('send_message', function(data) {
        console.log(data.message);
        io.sockets.emit('broadcast_message', { username: socket.username, message: data.message }); //propriedade que da acesso a todas as sockets que estam no servidor
    })
});