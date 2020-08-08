const db = require("../models");

module.exports = function (app) {
    app.get("/api/products", function (req, res) { 
        db.Product.findAll({}).then(function(dbProducts){
            res.json(dbProducts)
        })
    });
    app.get("/api/products/searchbyname", function (req, res){
        db.Product.findAll({
            where:{
                productName: req.query.searchterm
            }
        }).then(function(dbProducts){
            res.json(dbProducts)
        })
    });

    app.get("/api/products/sortbyprice", function(req, res){
        if (req.query.sort=== 'DESC') {
            db.Product.findAll({
             order: [
                 ['price', 'DESC']
             ]
            }).then(function(dbProduct){
                res.json(dbProduct)
            }) 
        }
        else{
            db.Product.findAll({
                order: [
                    ['price', 'ASC']
                ]
               }).then(function(dbProduct){
                   res.json(dbProduct)
               }) 
        }

    })
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