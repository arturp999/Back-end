// TODO Implement all the models and business logic using sequelize
const Sequelize = require('sequelize');
const PersonModel = require('./models/user');


//criação da ligação com a BD
const sequelize = new Sequelize('ficha9', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', //engine da base de dados
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const User = PersonModel(sequelize, Sequelize);

// Adicionar o modelo à BD
sequelize.sync({ force: true })
    .then(() => {
        // console.log("Tables created");
        User.bulkCreate([ //adicionar instancias
                { email: "admin", password: "admin" },
                { email: "peasdsadsadro@gmail.com", password: "Scasdsdnia" },
                { email: "pedasdsadsaro@gmail.com", password: "Scasnia" },
                { email: "pedasdsadro@gmail.com", password: "Scasdfsnia" },
            ])
            .then(() => {
                return User.findAll();
            })
            .then((users) => {
                // console.log(users);
            });
    });

module.exports = {
    User
}