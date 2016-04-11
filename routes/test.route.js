module.exports = function(app) {
    const testClient = require('../controllers/client.controller');
    app.get('/client', testClient.signIn);
};
