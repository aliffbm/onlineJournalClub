
/*********************************
*	This script file will initilaize
*	local Mongo database on machine
*	with value from JSON object files
*
**********************************/

var mongoose = require('mongoose');
var commentWallModel = require('./models/wallComments.js');
var membersModel = require('./models/members.js');


var local_database = 'journalClub';
var local_database_uri = 'mongodb://localhost/' + local_database;
var mongodb_uri = "mongodb://heroku_cz3th0w2:t79os0uv230317fjo1g07l9v4p@ds143990.mlab.com:43990/heroku_cz3th0w2";

var database_uri = mongodb_uri || local_database_uri;
mongoose.connect(database_uri);




/*------------------------------------
*	This is where we implement the initialization
*------------------------------------*/
var comments = require('./wallComments.json');
var members = require('./members.json');


membersModel.Member 
	.find()
	.remove()
	.exec(afterClear)


function afterClear(err){
	if(err)
		console.log(err);

	var to_save_count = members.length;
	for(var i=0; i<members.length;i++){
		var json = members[i];
		var member = new membersModel.Member(json);


		member.save(function (err, member){
			if(err)
				console.log(err);

			to_save_count--;
			console.log(to_save_count + " left to save");
			if(to_save_count <=0)
				console.log("Done initializing members");
		})
	}
}


commentWallModel.Comment
	.find()
	.remove()
	.exec(onceClear);

function onceClear(err){
	if(err)
		console.log(err); // <-------- Will send correct HTTP-Server response for this

	var to_save_count = comments.length;
	for(var i=0;i<comments.length;i++){
		var json = comments[i];
		var comment = new commentWallModel.Comment(json);

		comment.save(function(err, comment){
			if(err) console.log(err); // <---- need to update to server reponse before live

			to_save_count--;
			console.log(to_save_count + ' left to save');
			if(to_save_count <=0){
				console.log("Done initializing comments");

				//terminate the script by closing connection to dataBase
				mongoose.connection.close(); 
			}
		})
	}
}