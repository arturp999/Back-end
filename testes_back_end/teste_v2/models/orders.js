module.exports = (sequelize, type) => {
    const order = sequelize.define('orders', {
        orderNumber: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        orderDate: type.DATE,
        requiredDate: type.DATE,
        shippedDate: type.DATE,
        status: type.STRING,
        comments: type.STRING,
        customerNumber: type.INTEGER,
    }, {
        timestamps: false
    });
    // order.associate = function(models) {
    //     user.hasOne(models.customers, { foreignKey: 'customerNumber', sourceKey: 'customers' })
    // }

    //order.hasOne(seq, { as: 'customers', foreignKey: 'customerNumber' })

    return order
}