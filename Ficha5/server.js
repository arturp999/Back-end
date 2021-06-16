const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const fs = require('fs');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

function readFile(path) {
    var data = fs.readFileSync(path);
    return data;
}

function writeFile(path, data) {
    fs.writeFileSync(path, data);
}

app.get('/', (req, res) => res.send('Hello World!'))

//users endpoint
// app.get('/users', function(request, response) {
//     response.send("ENDPOINT USERS");
// })

// users manda o info que está no ficheiro
app.get('/users', function(request, response) {
    var data = readFile('./persons.json')
    response.send(JSON.parse(data));
})

app.put('/users', function(request, response) {
    //ler ficheiro
    var data = JSON.parse(readFile('./persons.json'));
    //contar chaves/entradas no JSON lido
    var size = Object.keys(data).length;
    //Incrementar o tamanho
    size++;
    //Aceder ao que foi enviado no body no postman
    var person = request.body;
    //adicionar novo atributo id
    person.id = size
        // adicionar nova pessoa ao objeto json lido do ficheiro
    data["person" + size] = person;
    //re-escrever o ficheiro com o objeto json e a nova pessoa
    writeFile('./persons.json', JSON.stringify(data));
    //enviar a responta ao pedido PUT HTTP
    response.send(person);
})

app.delete('/users/:id', function(request, response) {
    var data = JSON.parse(readFile('./persons.json'));
    var id = request.params.id;
    delete data['person' + id]; //pessoa que vai levar delete
    //re-escrever o ficheiro com o objeto json e a sem a pessoa
    writeFile('./persons.json', JSON.stringify(data));
    response.send(data);
})

app.get('/users/:id', function(request, response) {
    var data = JSON.parse(readFile('./persons.json'));
    var id = request.params.id;
    var person = data['person' + id]; //pessoa que vai dar print
    response.send(person);
})

app.post('/users/:id', function(request, response) {
    var data = JSON.parse(readFile('./persons.json'));
    var id = request.params.id;
    var person = data['person' + id];

    if (person == undefined) {
        response.send("Person NOT found");
    } else {
        data["person" + id] = request.body;
        data["person" + id].id = id;
        writeFile('./persons.json', JSON.stringify(data));
        response.send(data["person" + id]);
    }
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

//res -> response