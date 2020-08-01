const db = require("../models");

module.exports = function (app) {
    app.get("/api/products", function (req, res) { 
        db.Product.findAll({}).then(function(dbProducts){
            res.json(dbProducts)
        })
    });
    app.get("/api/products/searchbyname", function (req, res){
        db.Product.findOne({
            where:{
                productName: req.query.searchterm
            }
        }).then(function(dbProducts){
            res.json(dbProducts)
        })
    });
   
    app.get("/api/products/:id", function(req,res) {
        db.Product.findOne({
            where: {
                productId: req.params.id
            }
        }).then(function(dbTask){
            res.json(dbTask)
        });
    });

   
}