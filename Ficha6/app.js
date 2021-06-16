const express = require("express");
const fs = require("fs"); //file system

//create express instances
const app = express();

function log(request, response) {
    var info = request.path + ", " + request.method + ", " + new Date() + "\n";
    fs.appendFileSync('log.txt', info); // ta a anexar ao ficheiro criado a informação que ta em cima
}


var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    //criar ficheiro de log
    fs.open('log.txt', 'a', function(err, fd) {
        console.log("File was created " + fd);
    });

    console.log("Example app listening at http://%s:%s", host, port);
});

app.get('/', function(request, response) {
    log(request, response);
    //var body = "Hello World";
    var page = '<!DOCTYPE html><html><head><title>Page Title</title></head><body><h1>This is a Heading</h1><p>{{datadeHoje}}</p></body></html>';
    var date = new Date();

    var file = fs.readFileSync('./index.html');
    page = page.replace('{{datadeHoje}}', date.toDateString()); //SUBSTITUIU UM FICHEIRO POR OUTRO vai a cima buscar

    response.writeHead(200, {
        "Content-Length": Buffer.byteLength(page),
        "Content-Type": "text/html"
    });
    response.end(page);
});

app.get('/user/:name', function(request, response) { // o name é um parametro..
    log(request, response);
    response.send("Welcome: " + request.params.name); //faz um pedido para o parametro nome  http://localhost:8081/user/artur <-
});

app.get('/log', function(request, response) {
    var file = fs.readFileSync("log.txt", "utf-8");
    response.writeHead(200, {
        "Content-Length": Buffer.byteLength(file),
        "Content-Type": "text/plain"
    });
    response.end(file);
})

app.get('/log.txt', function(request, response) {
    response.download("./log.txt", function(err) {
        if (err) {
            response.status(404).send(err);
            // response.status(404);
            // response.end(err.message);
        } else {
            ////dasdsadsa
        }
    });
})

//ARROW FUNCTION é uma função
app.get("/clear", (request, response) => {
    fs.unlinkSync("./log.txt");
    response.end("File deleted");
});