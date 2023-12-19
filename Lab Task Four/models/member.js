const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: String,
  designation: String,
});
module.exports = mongoose.model('Members', memberSchema);
