const path = require('path');
// const express = require('express');
// const router = express.Router();

module.exports = function(app) {

app.get('/menu', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/menu.html'))
});

app.get('/addItem', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/adminRoles.html'))
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

};
// module.exports = router;