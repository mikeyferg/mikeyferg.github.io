/* 

Project Name: Cookie Monster 
Client: Cookie Monster
Author: Alex Notov | http://twitter.com/zealoushacker
Developed @ General Assembly in SF and NYC

*/

// When you click the "Next Background" button, the page background
// should rotate through the different bg1.jpg, bg2.jpg, bg3.jpg, and bg4.jpg images.



var currentImage = 1;


// this is how you add a comment inline...

var stop = setInterval(
	function backgroundimage () {

		if(currentImage >= 5) {
			currentImage = 1;
		}
		else {
			currentImage = currentImage + 1;
		}


		$("body").css("background-image", "url('img/background" + currentImage + ".jpg')");
	

	},
	10000
);



	$("#stopSwapping").on("click", function () {clearInterval(stop);});

//$("#stopSwapping").on("click", clearInterval);
