const path = require('path');
// const express = require('express');
// const router = express.Router();

// // Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

app.get('/menu', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views/menu.html'))
});

app.get('/adminRoles', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views/adminRoles.html'))
});

app.get('/addItem', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views/addItem.html'))
});

app.get('/update', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views/updateItem.html'))
});

app.get('/removeItem', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views/removeItem.html'))
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views/signup.html'))
});

app.get("/", function(req, res) {
  console.log(req.user)
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/adminRoles");
  
}
else {
  res.sendFile(path.join(__dirname, "../public/views/index.html"))
};
});

app.get("/login", function(req, res) {
  console.log(req.user)
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/adminRoles");
  }
  else {
  res.sendFile(path.join(__dirname, "../public/views/login.html"))
};
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
app.get("/members", isAuthenticated, function(req, res) {
  res.sendFile(path.join(__dirname, "../public/views/members.html"));
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views/index.html'))
});

};
// module.exports = router;