const express = require('express');
// const apiRoutes = require("./controllers/menuController");
// const htmlRoutes = require("./controllers/htmlController")
// express-session -> every user of your API or website will be assigned a unique session, and this allows you to store the user state
var session = require("express-session");
var passport = require("./config/passport");

const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// app.use('/api', apiRoutes);
// app.use(htmlRoutes);

// Routes
// =============================================================
require("./controllers/menuController.js")(app);
require("./controllers/htmlcontroller.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});