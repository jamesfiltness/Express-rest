const users = require('../controllers/user.controller.js');

module.exports = function(app) {
    // Set up the 'signup' routes
	app.route('/users')
	   .get(users.list)
	   .post(users.create);

};
