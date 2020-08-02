// Creating our Products model
module.exports = function (sequelize, DataTypes){
    var Product = sequelize.define("Product", {
        productId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        catogery:{
            type: DataTypes.STRING,
            allowNull: false
        },
        imageURL:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Product;
}