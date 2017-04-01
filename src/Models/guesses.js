const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guessSchema = new Schema({
  guesses: Number,
})


module.exports = mongoose.model('Guesses', guessSchema)
