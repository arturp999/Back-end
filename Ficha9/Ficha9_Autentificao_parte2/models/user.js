module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        email: type.STRING,
        password: type.STRING,
    });
}


//definicao do modelo