const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const app = express();
const photoController = require('./controllers/PhotoControllers');
const pageController = require('./controllers/PageController');

// connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);
app.use(fileUpload());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/photos/:id', photoController.getOnePhoto);
app.get('/', photoController.getAllPhotos);
app.post('/photos', photoController.createPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto);

app.get('/addphoto', pageController.getAddPage);

app.get('/about', pageController.getAboutPage);
app.get('/photos/edit/:id', pageController.getEditPage);

// Portta baslatmak
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor!!!`);
});
