module.exports = function(app) {
    const playlist = require('../controllers/playlist.controller');
    app.get('/playlist', playlist.getPlaylists);
};
