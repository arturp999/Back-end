module.exports = (sequelize, type) => {
        const customer = sequelize.define('customers', {
            customerNumber: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            customerName: type.STRING,
            contactLastName: type.STRING,
            contactFirstName: type.STRING,
            phone: type.STRING,
            addressLine1: type.STRING,
            addressLine2: type.STRING,
            city: type.STRING,
            state: type.STRING,
            postalCode: type.STRING,
            country: type.STRING,
            creditLimit: type.DECIMAL,
        }, { timestamps: false });

        // customer.associate = function(models) {
        //     user.belongsTo(models.customers, { foreignKey: 'customerNumber' })
        // }

        return customer

    }
    //definicao do modelo de criação para a BD