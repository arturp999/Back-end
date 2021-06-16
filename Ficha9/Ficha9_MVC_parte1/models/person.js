module.exports = (sequelize, type) => {
    return sequelize.define('persons', {
        firstname: type.TEXT,
        lastname: type.TEXT,
        profession: type.STRING,
        age: type.INTEGER
    });
}


//definicao do modelo