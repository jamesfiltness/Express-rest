exports.getPlaylists = function(req,res) {
    if(req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();
    res.send('showing all playlists');
}
