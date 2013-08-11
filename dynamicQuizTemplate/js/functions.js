// Your JS code goes here.
var allQuestions = [
	{question: "Who is Prime Minister of the United Kingdom?", 
		choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], 
		correctAnswer:0},
	{question: "Who is the President of the United States?", 
		choices: ["George Bush", "Barack Obama", "Tony Blair"], 
		correctAnswer:1},
	{question: "Who is the Prime Minister of Russia?", 
		choices: ["Gorbachav", "Stalin", "Putin", "Alexi", "Natalia"], 
		correctAnswer:2},
	{question: "Final Question?", 
		choices: ["test1", "test2"], 
		correctAnswer:0}
];

var score = 0;
var currentQuestion = 0;

var answer = function() {
	return ('#answer' + allQuestions[currentQuestion].correctAnswer);
}
var question = function() {
	return allQuestions[currentQuestion].question;
}
var choicesLength = function() {
	return allQuestions[currentQuestion]['choices'].length;
}
var choices = function() {
	return allQuestions[currentQuestion].choices;
}

var removeFields = function() {
	$('legend').remove();
	//remove previous labels and radio buttons
	$('label').remove();
	$('input').remove();
	$('button').remove();
}

var createAnswers = function() {
	var curr_choices = choices();
	for (var i = 0; i < choicesLength(); i++) {
		
		var input = $('<input type="radio" name="answer">');
			$(input).attr({'value': 'answer'+ i, 'id': 'answer' + i, 'class':'validate' } );
			$(input).css({'display': 'inline', 'margin': '10px'})
			$('.answers').append(input);


		var label = $('<label>')
			$(label).attr('for', 'answer' + i)
			$('.answers').append(label);
			$(label).css({'display': 'none', 'width': '100%'})
			$(label).fadeToggle();
		
		$("#answer" + i ).next().text(curr_choices[i]);
	}
}


var legend = function() {
		var legend = $('<legend>')
		$('fieldset').append(legend);
		$('legend').append(question());
		$('legend').css({'font-weight': 'bold', 'display': 'none'});
		//$('legend').slideToggle();
		//$('legend').animate({width: 'toggle'});
		$('legend').fadeToggle();
}

var submitButton = function() {
	var submit = $('<input>');
	$(submit).attr({'type':'submit', 'value':'submit', 'id':'submit'});
	$(submit).css({'float':'left', 'width':'50px', 'height': '25px'})
	$('fieldset').append(submit);
}

var backButton = function() {
	var back = $('<button>');
	$(back).attr("class", "button");
	$(back).css({'float': 'right', 'margin-left':'10px'})
	$(back).text("<<<<");
	$('fieldset').append(back);
}

var userAnswerNumber = function() {
	var userAnswer = $("input[type='radio'][name='answer']:checked").val();
	return parseFloat(userAnswer.slice(-1));
}

var userAnswerArray = new Array();

var backButtonClick = function() {
	$('button').on('click', function(e) {
		//decrease question counter in order to load previous page
		currentQuestion--;
		console.log("Current Question number is " + currentQuestion);
			
		//if not the first questions go back
		if (currentQuestion >= 0) {
			var cur_question =  question();
			//prevent default submission
			e.preventDefault();
			//clear all
		 	removeFields();
		 	//create legend
			legend();
			//create submit button
	 		submitButton();
	 		//create answers
			createAnswers();
	
	 		//if on any page but the first create a back button
	 		if (currentQuestion > 0) {
		 		backButton();
		 		backButtonClick();		 			
	 		}						
			//if at the first question do not go back further
			else {
				currentQuestion = 0;
				console.log("Current Question number is " + currentQuestion)
			}
		}	
		//auto fill prior user answer (set checked attribute)
		var currentAnswer = "#answer" + userAnswerArray[currentQuestion];
			$(currentAnswer).attr("checked", "checked");

		//delete useraNSWER in array of question currently on
		userAnswerArray.splice(currentQuestion, 1);
	})//endback button

}





