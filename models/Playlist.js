// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var PlaylistSchema = new mongoose.Schema({
  name: String,
  created: Date
});

// Export the Mongoose model
module.exports = mongoose.model('Playlist', PlaylistSchema);
