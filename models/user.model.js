const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName : String,
    lastName: String,
    email: String,
    username: String,
    password: String
});

mongoose.model('User', userSchema);
