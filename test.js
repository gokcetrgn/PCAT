const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/pcat-test-db');

const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo

// Photo.create({
//   title: 'Photo Title',
//   description: 'Lorem ipsum sipsum',
// });

// read a photo
// Photo.find({}, (err, data) => {
//   console.log(data);
// });

// update

const id = '67cf279fc649307383f0d311';
Photo.findByIdAndUpdate(id, {
  title: "My Photo's",
  description: 'Updated desc',
})
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
