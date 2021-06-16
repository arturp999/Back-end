const express = require('express');
const Sequelize = require('sequelize');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//criacao do servidos
var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening")
})

//criação da ligação com a BD
const sequelize = new Sequelize('ficha8', 'root', '', {
    dialect: 'mysql' //engine da base de dados
});

//autenticação à BD
sequelize.authenticate()
    .then(() => {
        console.log("Connection has been made")
    })
    .catch(err => {
        console.error("Unable to connect", err)
    });

//Definicao do modelo
const Person = sequelize.define('persons', {
    firstname: Sequelize.TEXT,
    lastname: Sequelize.TEXT,
    profession: Sequelize.STRING,
    age: Sequelize.INTEGER
});

// Adicionar o modelo à BD
// sequelize.sync({ force: false })
//     .then(() => {
//         console.log("TA A FUNCIONAR!! TABLES HAVE BEEN CREATED");
//         Person.bulkCreate([
//                 { firstname: "Vasco", lastname: "Costa", profession: "Gamer", age: 17 },
//                 { firstname: "Joao", lastname: "Edeuardo", profession: "IT", age: 13 },
//                 { firstname: "Pedro", lastname: "Scania", profession: "Streamer", age: 21 },
//                 { firstname: "Joao", lastname: "Xeta", profession: "Cantor", age: 14 },
//                 { firstname: "Artur", lastname: "Pedrosa", profession: "Desempregado", age: 22 },
//                 { firstname: "Luis", lastname: "Jacinto", profession: "IT", age: 22 },
//                 { firstname: "Ignacio", lastname: "Cobra", profession: "Boxer", age: 51 }
//             ])
//             .then(() => {
//                 return Person.findAll();
//             })
//             .then((persons) => {
//                 console.log(persons)
//             })
//     });


//primeiro endpoint
app.get('/', function(request, response) {
    response.send("ENDPOINT ROOT");
});

app.get('/persons', function(request, response) {
    Person.findAll()
        .then(persons => {
            response.json(persons);
        });
});

app.post('/persons', function(request, response) {
    Person.create(request.body)
        .then(newPerson => {
            response.json("O ID inserido" + newPerson.id);
        });
});

app.delete('/persons', function(request, response) {
    Person.destroy({
        where: {
            id: request.body.id
        }
    }).then(result => {
        if (result == 0) {
            response.json("Cannot find ID");
        } else {
            response.json("Deleted user was:" + request.body.id)
        }
    });
});

// app.delete('/persons/:id', function(request, response) {
//     Person.destroy({
//         where: {
//             id: request.params.id
//         }
//     }).then(result => {
//         if (result == 0) {
//             response.json("Cannot find ID");
//         } else {
//             response.json("Deleted user was:" + request.params.id)
//         }
//     });
// });

app.delete('/persons/:id', function(request, response) {
    Person.findAll({
        where: {
            id: request.params.id
        }
    }).then(result => {
        if (result == 0) {
            response.json("Cannot find ID");
        } else {
            response.json(result)
        }
    });
});

app.get('/persons/:id/:profession', function(request, response) {
    Person.findAll({
        where: {
            id: request.params.id,
            profession: request.params.profession
        }
    }).then(result => {
        if (result == 0) {
            response.json("Cannot find profession");
        } else {
            response.json(result)
        }
    });
});

app.post('/persons/:id', function(request, response) {
    Person.update(request.body, {
        where: {
            id: request.params.id
        }
    }).then(result => {
        if (result == 0) {
            response.send("cannot find id");
        } else {
            Person.findAll({
                where: {
                    id: request.params.id
                }
            }).then(result => {
                response.send(result);
            });
        }
    });
});