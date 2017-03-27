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

  	var source = $("#showtemplate").html();
  	var template = Handlebars.compile(source);

  	var context = {
  		name:"AliBaba", 
  		body:"okay then"
  	}
  	var stuff = template(context);
console.log(stuff);
  	$("#commentWall").html(stuff);




}



