const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const GameSchema = new Schema({
   name: String,
   summary: String,
   rating: Number,
   screenshots: Array,
   type: String,
});

const GAME= mongoose.model('GAME', GameSchema);
module.exports = GAME;