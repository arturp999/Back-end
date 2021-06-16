const Sequelize = require('sequelize');
const PersonModel = require('./models/person');


//criação da ligação com a BD
const sequelize = new Sequelize('ficha8', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', //engine da base de dados
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const Person = PersonModel(sequelize, Sequelize);

// Adicionar o modelo à BD
sequelize.sync({ force: true })
    .then(() => {
        // console.log("Tables created");
        Person.bulkCreate([ //adicionar instancias
                { firstname: "pedro", lastname: "Scania", profession: "streamer", age: 99 },
                { firstname: "artur", lastname: "pereira", profession: "carregar", age: 99 },
                { firstname: "vasco", lastname: "costa", profession: "fecharjanelas", age: 99 },
                { firstname: "joao", lastname: "xeta", profession: "pastor", age: 99 },
                { firstname: "vizinho", lastname: "decima", profession: "pintor", age: 99 },
            ])
            .then(() => {
                return Person.findAll();
            })
            .then((persons) => {
                // console.log(persons);
            });
    });

module.exports = {
    Person
}