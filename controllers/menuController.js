// Dependencies
var db = require("../models");
// console.log(db);
// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the menu
  app.get("/api/menu", function (req, res) {
    var query = {};
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author

    db.menu.findAll({
      where: query,
      include: [db.categories]
    }).then(function (dbmenu) {
      res.json(dbmenu);
    });
  });

  // POST route for saving a new post
  app.post("/api/admin", function (req, res) {
    db.menu.create(req.body)
      .then(function (dbmenu) {
        res.json(dbmenu);
      })
      .catch(function (err) {
        console.log(err.message)
        res.sendStatus(500)
      });
  });

  // DELETE route for deleting menu
  app.delete("/api/admin/:id", function (req, res) {
    db.menu.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbmenu) {
      res.json(dbmenu);
    })
      .catch(function (err) {
        console.log(err.message)
        res.sendStatus(500)
      });
  });

  // PUT route for updating menu
  app.put("/api/admin", function (req, res) {
    db.menu.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbmenu) {
        res.json(dbmenu);
      })
      .catch(function (err) {
        console.log(err.message)
        res.sendStatus(500)
      });
  });
};
