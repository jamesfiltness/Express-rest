var config = require('./config'),
    express = require('express'),
    morgan = require('morgan'),
    compression = require('compression'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    passport = require('passport');

module.exports = function() {
    var app = express();

    if(process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if(process.env.NODE_ENV === 'production') {
        app.use(compression());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    //Allow form data to be easily passed
    app.use(bodyParser.json())

    //Allow PUT and DELETE
    app.use(methodOverride('X-HTTP-Method-Override'));

    app.use(passport.initialize());

    app.set('views', './views');
    app.set('view engine', 'ejs');


    require('../routes/user.route.js')(app);
    require('../routes/test.route.js')(app);
    require('../routes/playlist.route.js')(app);
    return app;
};
