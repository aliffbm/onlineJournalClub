var Mongoose = require('mongoose');

var commentPostSchema = new Mongoose.Schema({
	"name": String,
	"subject": String,
	"commentString": String
});

exports.Comment = Mongoose.model('Comment', commentPostSchema);