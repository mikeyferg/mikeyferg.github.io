// Your JS code goes here.
$(document).ready(function() {
	//var curr_choices = choices();
	console.log("Current Question number is " + currentQuestion);
	console.log("Score is " + score);
	//initial creation of question
	legend();

	//initial creation of answer choices
	createAnswers();
	
	//submission click event
	$('form').on('submit', function(e) {
	  	//client side validation- requires an answer to be selected for the next 
	  	//question-answer set to load
	  	if ($('.validate').is(':checked')) {
	  		console.log("checked!");
			//avoid form from performing get and allows it to increase global variable
		 	e.preventDefault();
		 	//store users answer in an array
		 	userAnswerArray[currentQuestion] = (userAnswerNumber());
		 	
		 	//increase questions counter variable to use to generate next question-answer set
		 	currentQuestion++;
		 	console.log("Current Question number is " + currentQuestion) ;
		 	//clear all exisiting fields
		 	removeFields();

			//add new answers choices if new quetions/answers exist
		 	if (currentQuestion < allQuestions.length) {
		 		//add next question
				legend()
				//create submit button
		 		submitButton();
		 		//create back btton
		 		backButton();
					//back button functionality
					backButtonClick();
				//add new answers
				for (var i = 0; i < choicesLength(); i++) {
			 		var curr_choices = choices();
			 		var curr_choicesLength = choicesLength();

					var input = $('<input type="radio" name="answer">');
						$(input).attr({'value': 'answer'+ i, 'id': 'answer' + i, 'class':'validate' });
						$(input).css({'display': 'inline', 'margin': '10px'});
						$('.answers').append(input);

					var label = $('<label>');
						$(label).attr('for', 'answer' + i);
						$('.answers').append(label);
						$(label).css({'display': 'none', 'width': '100%'});
						$(label).fadeToggle();
					
					$("#answer" + i ).next().text(curr_choices[i]);
				}	
		 	}
		 	//after final question/answers, display final score
		 	else {
		 		//compare answer array to correct answers to calculate the score
		 		for(i=0; i<allQuestions.length; i++) {
		 			if (userAnswerArray[i] == allQuestions[i].correctAnswer) {
		 				score++
		 			}
		 		}
		 		//hide the forme
		 		$('form').hide();
		 		//append score
		 		var finalScore = $('<h1>').text("Your score is " + score + "!!");
		 			$('.container').append(finalScore); 
		 	}
		}
		 //if no answer is selected, prevent default form submission
		else {
		 	e.preventDefault();
		}	
	});
});