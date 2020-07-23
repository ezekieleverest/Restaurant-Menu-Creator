const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/menu', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/menu.html'))
});

router.get('/addItem', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/addItem.html'))
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;