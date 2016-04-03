const User = require('mongoose').model('User');

exports.create = function(req,res,next) {
    const user = new User(req.body);

    user.save(function(err) {
        if(err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};

exports.list = function(req,res,next) {
    //retrieve only username:
    //User.find({}, 'username', function(err, users) {

    //options like limit/skip for pagination etc:
    //User.find({}, 'username', {skip: 10, limit: 10}, function(err, users) {
    User.find({}, function(err, users) {
        if(err) {
            return next(err);
        } else {
            res.json(users);
        }
    })
}
