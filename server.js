const express = require('express');
// const apiRoutes = require("./controllers/menuController");
// const htmlRoutes = require("./controllers/htmlController")
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// app.use('/api', apiRoutes);
// app.use(htmlRoutes);

// Routes
// =============================================================
// require("./controllers/htmlcontroller.js")(app);
require("./controllers/menuController.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});