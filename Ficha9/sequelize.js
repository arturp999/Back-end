const Sequelize = require('sequilize');
const PersonModel = require('./models/person');

//Criacao da ligação à BD
const sequilize = new Sequilize('ficha8', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
})

const Person = PersonModel(sequilize, Sequelize);

sequelize.sync({ force: true })
    .then(() => {
        console.log("TA A FUNCIONAR!! TABLES HAVE BEEN CREATED");
        Person.bulkCreate([
                { firstname: "Vasco", lastname: "Costa", profession: "Gamer", age: 17 },
                { firstname: "Joao", lastname: "Edeuardo", profession: "IT", age: 13 },
                { firstname: "Pedro", lastname: "Scania", profession: "Streamer", age: 21 },
                { firstname: "Joao", lastname: "Xeta", profession: "Cantor", age: 14 },
                { firstname: "Artur", lastname: "Pedrosa", profession: "Desempregado", age: 22 },
                { firstname: "Luis", lastname: "Jacinto", profession: "IT", age: 22 },
                { firstname: "Ignacio", lastname: "Cobra", profession: "Boxer", age: 51 }
            ])
            .then(() => {
                return Person.findAll();
            })
            .then((persons) => {
                console.log(persons)
            })
    });

module.exports = {
    Person
}