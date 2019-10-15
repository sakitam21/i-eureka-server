var mongoose = require('mongoose');
var db = require('../config/mongoose.js');

var UserSchema = mongoose.Schema({
	username: String,
	password: String
});

module.exports = db.model('User',UserSchema);