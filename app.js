var express = require('express');
var app = express();
var handlebars = require("express-handlebars");



// Requiring JSON Dagta
var members = require('./members.json');


var path = require('path');
app.use(express.static('public'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars')
var PORT = process.env.PORT || 3000;


app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req,res){
	res.render('index', members);
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

var localData;



app.get('/commentWall', function(req,res){
	res.render('partials/commentWall');
})


/*app.post('/postComment', function(req, res){
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

app.get('/quiz', function(req,res){
	res.render('quizPage', cogsQuizData);
})
app.listen(PORT, function(){


	console.log("Listening on PORT: " + PORT);
})