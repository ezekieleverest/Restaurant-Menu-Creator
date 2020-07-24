// Dependencies
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the menu
  app.get("/api/menu", function(req, res) {
    var query = {};
    // if (req.query.author_id) {
    //   query.AuthorId = req.query.author_id;
    // }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.menu.findAll({
      where: query,
      include: [db.categories]
    }).then(function(dbmenu) {
      res.json(dbmenu);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/menu/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.menu.findOne({
      where: {
        id: req.params.id
      },
      include: [db.categories]
    }).then(function(dbmenu) {
      res.json(dbmenu);
    });
  });

  // POST route for saving a new post
  app.post("/api/admin", function(req, res) {
    db.menu.create(req.body).then(function(dbmenu) {
      res.json(dbmenu);
    });
  });

  // DELETE route for deleting menu
  app.delete("/api/admin/:id", function(req, res) {
    db.menu.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbmenu) {
      res.json(dbmenu);
    });
  });

  // PUT route for updating menu
  app.put("/api/admin", function(req, res) {
    db.menu.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbmenu) {
      res.json(dbmenu);
    });
  });
};
