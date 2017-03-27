	'use strict';


	// Call this function when the page loads (the "ready" event)
	$(document).ready(function() {
		initializePage();
	})

	/*
	 * Function that is called when the document is ready.
	 */
	 function initializePage() {

	 	

	 /*	$("#postCommentBtn").click(function(e){

  		var source = $("#render-temp").html();
  		alert(source);
  		var template = Handlebars.compile(source);

  		var context = {
  			name: "OkieDokie"
  		};

  		var stuff = template(context);

  		$("#commentWall").html(stuff);
  	});*/

  	//Handlebars.registerPartial("../../views/partial/commentWall", $("#showtemplate").html())
  	// Handlebars.registerHelper();

 	$("#postCommentBtn").click(function(e){


 		e.preventDefault();

 		var posterName = $("#name").val();
 		var subjectLine = $("#subject").val();
 		var commentString = $("#commentString").val();

 		$.post('/commentWall', {"name": posterName, "subject": subjectLine, "commentString": commentString});
 		$.get('/commentWall', function(data){
  		var html = 	"{{#each .}}<h1>User: {{name}}</h1>"+
		"<h2>Subject: {{subject}}</h2>"+
		"<p>Comment: {{commentString}}</p>{{/each}}";

	  	var template = Handlebars.compile(html);

	  	var stuff = template(data);
	  	console.log(data);
		//console.log(stuff);
	  	$("#commentWall").html(stuff);

	  	$("#name").val($("#name").attr("placeholder"));
	  	$("#subject").val($("#subject").attr("placeholder"));
	  	$("#commentString").val($("#commentString").attr("placeholder"));



	  	//window.location.href='/';

  	})

 	})

  

/*  	var context = {
  		theName:"AliBaba", 
  		theBody:"okaythen"
  	};*/

  	// var source = $("#showtemplate").html();
  

/*  	Handlebars.registerHelper('cWall', function(){

  	})*/




}



