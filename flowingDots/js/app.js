// Your JS code goes here.

$(document).ready(function() {


	for (var i = 0; i < 20; i++) {
		console.log(i);
		var bubble = $('<div>');
		bubble.addClass('bubble');
		bubble.css('left', i*20 + 'px')
		$('body').append(bubble);
	}

	$('.bubble').on('click', function() {

		if($(this).position().left != 20){
			$('.bubble').animate({'left': '20px'}, 1000);
			$('.bubble').css('background', 'red')
		}
		else {
			var bubbles = $('.bubble');
			for (var i = 0; i < bubbles.length; i++) {
				$(bubbles[i]).animate({'left': i*20 + 'px'}, 1000)
				$('.bubble').css('background', 'blue')
			}
		}
	});

});