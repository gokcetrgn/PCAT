const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const app = express();
const Photo = require('./models/Photo');

// connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/addphoto', (req, res) => {
  res.render('addphoto');
});
app.post('/photos', async (req, res) => {
  await Photo.create(req.body);
  res.redirect('/');
});
app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/', async (req, res) => {
  const photos = await Photo.find({});
  res.render('index', { photos });
});

// Portta baslatmak
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor!!!`);
});
