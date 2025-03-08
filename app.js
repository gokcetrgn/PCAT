const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

// Portta baslatmak
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor!!!`);
});
