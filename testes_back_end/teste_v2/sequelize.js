const Sequelize = require('sequelize');
const customerModel = require('./models/customers');
const orderModel = require('./models/orders');

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

sequelize // ve se está a conseguir connectar a DB
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const seq = customerModel(sequelize, Sequelize);
const seqOrders = orderModel(sequelize, Sequelize);

module.exports = {
    seq,
    seqOrders
}