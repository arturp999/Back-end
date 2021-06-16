// TODO Implement all the models and business logic using sequelize
const Sequelize = require('sequelize');
const PersonModel = require('./models/user');


//criação da ligação com a BD
const sequelize = new Sequelize(process.env.DB_SCHEMA, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST, // vai buscar a informação ao .env
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
        //console.log("Tables created");
        User.bulkCreate([ //adicionar instancias
                { email: "admin", password: "admin", },
                { email: "admin@gmail.com", password: "admin" },
            ])
            .then(() => {
                return User.findAll();
            })
            .then((users) => {
                //console.log(users);
            });
    });

module.exports = {
    User
}