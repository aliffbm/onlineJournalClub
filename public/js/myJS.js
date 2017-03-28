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
  		var html = 	"{{#each .}}<div class='row' style='margin-left: 10px;'><img class='img-responsive' width=100 src='images/svg/commentHead.svg' style='float:left; margin-right: 15px;'/> <h4>  User: {{name}}</h4>"+
		"<h5>Subject: {{subject}}</h5></div>"+
		"<div class='well' style='margin-top: 10px; margin-left: 10px;'><p>Comment: {{commentString}}</p></div></div>{{/each}}";
  		
	  	var template = Handlebars.compile(html);

	  	var stuff = template(data);
	  	console.log(data);
		//console.log(stuff);
	  	$("#commentWall").html(stuff);

 	})


 	



}



