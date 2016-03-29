var express = require('express');
var mongoose = require('mongoose');
/* extracts the entire body portion of an incoming request stream and exposes it on req.body as something easier to interface with */
var bodyParser = require('body-parser');
var Playlist = require('./models/Playlist');

// Connect to the beerlocker MongoDB
mongoose.connect('mongodb://localhost:27017/rest-server');

var app = express();

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Create our Express router
var router = express.Router();

// Initial dummy route for testing
// http://localhost:3000/api
router.get('/', function(req, res) {
  res.json({ message: 'You are running dangerously low on beer!' });
});

// Create a new route with the prefix /beers
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
