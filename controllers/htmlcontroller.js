const path = require('path');
// const express = require('express');
// const router = express.Router();

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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views/index.html'))
});

};
// module.exports = router;