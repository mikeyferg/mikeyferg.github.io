// Here's some basic instructions. Try to set it up
// so that you can click 'next image' and it cycles through
// all the images one at a time!

// Hide all the images
// Show the first one
// Create a variable to store the current slide number
// Set up a click event for div.next
// On each click, hide the current slide, and show the next one
// Use a condition to check if you've gone past the end and reset the current slide counter

// You may want to use jQuery's .eq() function to get a specific
// element in the jQuery result. Read about it at api.jquery.com

var currentSlide = 0

var totalImg = $('#slideshow').children();
console.log(totalImg.length);

		var holla = $('<h2>');
		holla.text('Ohhhhhhhh!');

$(document).ready(function() {
	$('.next').on('mouseenter', function() {

		$('.next').append(holla);
	})

	// $('.next').on('mouseleave', function() {

	// 	$('h2').css('display', 'none');
	// })


	$('.next').on('click', function() {
		$('.next').text("Click2Shake").css('background-color', 'green').effect('shake');
		//$('.next').effect('shake');

		$('h1').fadeOut();
		$('img').fadeOut();



		if (currentSlide < totalImg.length) {
			$('img').eq(currentSlide).fadeIn().css({'display' : 'block'});
			//$('img').css({'display' : 'block'})
			currentSlide ++;
			holla.remove();
		}
		else  {
			$('img').eq(0).fadeIn().css({'display' : 'block'});
			currentSlide = 1;
		}


	});





});