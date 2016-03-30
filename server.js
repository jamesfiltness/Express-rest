var express = require('express');
var mongoose = require('mongoose');
/* extracts the entire body portion of an incoming request stream and exposes it on req.body as something easier to interface with */
var bodyParser = require('body-parser');
var Playlist = require('./models/Playlist');

// Connect to MongoDB via <ongoose
mongoose.connect('mongodb://localhost:27017/rest-server');

var app = express();

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Create Express router
var router = express.Router();

// Create a new route with the prefix /playlist
var playListRoute = router.route('/playlist');

// Create endpoint /api/beers for POSTS
playListRoute.post(function(req, res) {
  // Create a new instance of the Beer model
  var playlist = new Playlist();

  // Set the beer properties that came from the POST data
  playlist.name = req.body.name;
  playlist.created = req.body.created;

  // Save the beer and check for errors
  playlist.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Playlist added', data: playlist });
  });
});

playListRoute.get(function(req, res) {
  Playlist.find(function(err, playlist) {
      if (err)
        res.send(err);

      res.json(playlist);

  });
});

// Create a new route with the /beers/:beer_id prefix
var PlayListRoute = router.route('/playlist/:playlist_id');

// Create endpoint /api/beers/:beer_id for GET
PlayListRoute.get(function(req, res) {
  // Use the Beer model to find a specific beer
  Playlist.findById(req.params.playlist_id, function(err, playlist) {
    if (err)
      res.send(err);

    res.json(playlist);
  });
});

// middleware for automatically parsing forms with the content-type application/x-www-urlencoded
// the result is stored on the req.body
app.use(bodyParser.urlencoded({
  extended: true
}));

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(port);
console.log('App started on ' + port);
