	'use strict';

	// Call this function when the page loads (the "ready" event)
	$(document).ready(function() {
		initializePage();
	})

	/*
	 * Function that is called when the document is ready.
	 */


	 function initializePage() {

		// This is used by including script tag with src="researchPaperTemplate.js" 
		 function fadeSpringIn(){
	 	alert("Hello");
	 	}

		$('#askButton').click(function(e){
			e.preventDefault();

			$('#commentInput').fadeToggle();
		})
	 
		$('#researchPaperTemplate').html(researchPaperTemplate);

	 	//this is to get data for all the wall post
  		$.get('/commentWall', function(data){

  			// match poster to user Image
  			$.get('/members', function(membersData){
		  		console.log(membersData);
		  		var flag = false;

		  		console.log(membersData[1].name.toLowerCase() + " ..Hello.. " + data[0].name.toLowerCase());
		  		for(var i=0;i<data.length;i++){


		  			for(var j=0;j<membersData.length;j++){
		  				if(data[i].name.toLowerCase() == membersData[j].name.toLowerCase() ){
		  					console.log( membersData[j].name.toLowerCase());
		  					console.log( membersData[j].image);
		  					$.post('/saveImagePost', {postingMember: membersData[j].name, PMImage: membersData[j].image});
		  					console.log("Post to image was made!!!");
		  				}
		  			}
		  		}
		  		/*for(var i=0;i<membersData.length;i++){
	  				
	  			}*/
	  		})

  		



	  	var flag = true;

	  	Handlebars.registerHelper('commentPostAlternator', function(context, options){



	  		console.log("size of context is " + context.length);
	  		console.log("id is " + options.fn(context[0]));
	  		var ret = "";
	  		for(var i=0;i<context.length;i++){
	  			if(i % 2 == 0){
	  				ret+='<div class="container" id="post-shift-left">'+options.fn(context[i])+'</div>';
	  			}else{
	  				ret+='<div class="container" id="post-shift-right">'+options.fn(context[i])+'</div>';

	  			}
	  		}
javascript:void(0);
	  		return ret;
	  		

	  	});

	  	var htmlTEST = '{{#commentPostAlternator .}}{{id}}{{name}}{{commentString}}{{/commentPostAlternator}}';

  		var html = "{{#commentPostAlternator .}}<div class='row' style='margin-left: 10px; margin-right:20px; margin-top:10px; padding-top:10px;'><div class='col-sm-2' id='userInfoContext'><figure><img class='img-responsive img-rounded' width=100 src='{{image}}' style='margin-right: 15px;'/> <figcaption> {{name}}</figcaption></figure></div>"+
		"<div class='well col-sm-10' id='userCommentStringContext' ><p style='background-color:black;'>{{commentString}}</p></div></div>{{/commentPostAlternator}}";
  		
	  	var template = Handlebars.compile(html);

	  	console.log(data);

	  	var stuff = template(data);
	  	console.log(data);
		//console.log(stuff);
	  	$("#commentWall").html(stuff);

	


	  	


	  	// this is to get data for members to compare data and post info on wall

 	})


 	}// this is the end of the initiliazation function 



