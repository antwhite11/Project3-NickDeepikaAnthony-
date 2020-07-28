// Creating our Order model
module.exports = function (sequelize, DataTypes){
    var Order = sequelize.define("Order", {
        orderId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATE
          }
    });

    Order.associate = function (models) {
        Order.belongsTo(models.Product, {
            foreignKey: "productId"
        });
        Order.belongsTo(models.User, {
            foreignKey: "userId"
        })
    };
    return Order;
}