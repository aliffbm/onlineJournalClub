var Mongoose = require('mongoose');

var membersSchema = new Mongoose.Schema({
	"name": String, 
	"image": String,
})

exports.Member = Mongoose.model('Member', membersSchema);