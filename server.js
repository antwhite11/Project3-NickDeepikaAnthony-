
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

const db = require("./models")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

require("./routes/api-product")(app);
require("./routes/api-order")(app)

//Model has been setup
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
