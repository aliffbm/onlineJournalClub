var Mongoose = require('mongoose');

var membersSchema = new Mongoose.Schema({
	"id": Number,
	"name": String, 
	"image": String,
})

exports.Member = Mongoose.model('Member', membersSchema);