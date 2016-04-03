process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
    express = require('./config/express');

const db = mongoose();
const app = express();

app.listen(3030);
module.exports = app;

console.log('server running on port 3030');
