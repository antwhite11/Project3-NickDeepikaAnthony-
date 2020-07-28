// Creating our Products model
module.exports = function (sequelize, DataTypes){
    var Product = sequelize.define("Product", {
        productId: {
            type: DataTypes.INTEGER,
            primaryKey: true
          },
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TINYTEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
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