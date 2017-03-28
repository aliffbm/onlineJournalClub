	'use strict';


	// Call this function when the page loads (the "ready" event)
	$(document).ready(function() {
		initializePage();
	})

	/*
	 * Function that is called when the document is ready.
	 */
	 function initializePage() {

	


  		$.get('/commentWall', function(data){
  		var html = 	"{{#each .}}<h1>User: {{name}}</h1>"+
		"<h2>Subject: {{subject}}</h2>"+
		"<p>Comment: {{commentString}}</p>{{/each}}";
  		

	  	var template = Handlebars.compile(html);

	  	var stuff = template(data);
	  	console.log(data);
		//console.log(stuff);
	  	$("#commentWall").html(stuff);

 	})


 	



}



