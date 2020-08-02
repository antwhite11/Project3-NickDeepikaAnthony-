const db = require("../models");
module.exports = function (app) {
    app.post("/api/orders", function(req, res){
        db.Order.create({
         orderId: req.body.orderId,
         userId: req.body.userId,
         productId: req.body.productId,
         date: req.body.date

        }).then(function(dbOrder){
            res.json(dbOrder)
        })
    });

    app.get("/api/orders/:userId/orderhistory", function(req, res){
        db.Order.findAll({
            where:{
                 userId: req.params.userId
            }
        }).then(function(dborders){
            res.json(dborders)
        })
    })
}
