const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guessSchema = new Schema({
  attemtps: Number,
})


module.exports = mongoose.model('Attempts', guessSchema)
