var express = require('express');
var app = express();
var handlebars = require("express-handlebars");
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// Requiring JSON Dagta
var members = require('./members.json');
//var wallComments = require('./wallComments.json');
var commentWallModel = require('./models/wallComments.js');
var membersModel = require('./models/members.js');



/****************************
*
*	Set up local data base here
*	Use Mongoose and MongoDB
*
*
****************************/

var local_database = 'journalClub';
var local_database_uri = 'mongodb://localhost/' + local_database;
var mongodb_uri = "mongodb://heroku_cz3th0w2:t79os0uv230317fjo1g07l9v4p@ds143990.mlab.com:43990/heroku_cz3th0w2";

var database_uri = mongodb_uri || local_database_uri;
mongoose.connect(database_uri);



app.use(express.static('public'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
var PORT = process.env.PORT || 3000;


app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
//app.use(bodyParser().urlencoded({extended:false}));
//app.use(bodyParser().json());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

var localDataMembers =[];








app.get('/', function(req,res){
	membersModel.Member
		.find()
		.exec(renderData);

		function renderData(err, data){
			console.log(data);
				res.render('index', {members:data});

		}

})

app.get('/members', function(req, res){
	membersModel.Member
 	.find()
 	.exec(sendDataOfMembers);

 	function sendDataOfMembers(err, data){
 		if(err) console.log(err);

 		res.send(data);
 	}


 })

app.post('/saveImagePost', function(req, res){
	var postingMember = req.body.postingMember;
	var PMImage = req.body.PMImage;

	console.log("posting Image data");
	//console.log(data);
	commentWallModel.Comment 
		.find({"name": postingMember}, function(err, data){
			var theData = data[0];

			console.log("Jose says he can't spell");
			console.log(JSON.stringify(theData));
			if(err){
				console.log(err);
			}else{
				theData.image = PMImage;
				console.log(theData.image);
				theData.save();
			}
		})
		


})
/*
* Route to Pages for each member of journal club
* We can refactor this later
* feel free to SET-UP a JSON OBJECT to feed data to your
* page
*/

app.get('/Adam', function(req,res){  
	res.render('adam');
})

app.get('/Aliff', function(req,res){
	res.render('aliff');
})
app.get('/Brandon', function(req,res){
	res.render('brandon');
})
app.get('/Carla', function(req,res){
	res.render('carla');
})
app.get('/Debbie', function(req,res){
	res.render('debbie');
})
app.get('/Jose', function(req,res){
	res.render('jose');
})
app.get('/Kelly', function(req,res){
	res.render('kelly');
})
app.get('/Leo', function(req,res){
	res.render('leo');
})
app.get('/Tiffany', function(req,res){
	res.render('tiffany');
})
/*END OF ROUTES TO INDIVIDUAL PAGES...*/

/*Creating a JSON route for Comment Wall*/

// var localData=[];


app.post('/commentWall', function(req, res){
	var name = req.body.name;
	var subject = req.body.subject;
	var commentString = req.body.commentString;


	commentWallModel.Comment
		.find()
		.exec(postData);

		function postData(err, data){
			if(err) console.log(data);

		var newComment = new commentWallModel.Comment({name:name, subject:subject, commentString: commentString})
		newComment.save();

		res.redirect("/");
		}

})

app.get('/commentWall', function(req,res){
	commentWallModel.Comment
		.find()
		.exec(sendData);

		function sendData(err, data){
			res.send(data);
		}
})



/*app.post('/postComment', function(req, res ){
	var name = req.body.name;
	var subject = req.body.subject;
	var commentStr = req.body.commentString;

	var commentPost = {name: name, subject: subject, comment: commentStr};
	localData = commentPost;
	res.render('index', commentPost);
})
*/
// app.get('/', function(req, res){
// 	res.send(localData);
// })

/*app.get('/quiz', function(req,res){
	res.render('quizPage', cogsQuizData);
})*/
app.listen(PORT, function(){


	console.log("Listening on PORT: " + PORT);
})