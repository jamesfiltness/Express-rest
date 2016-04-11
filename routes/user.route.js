const users = require('../controllers/user.controller.js'),
passport = require('passport');

module.exports = function(app) {

	// Set up the 'signup' routes
	app.route('/users')
	   .get(users.list)
	   .post(users.create);

	app.get('/oauth/facebook', passport.authenticate('facebook', {
		failureRedirect: '/playlist'
	}));

	app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
		failureRedirect: '/signin',
		successRedirect: '/playlist'
	}));

};
