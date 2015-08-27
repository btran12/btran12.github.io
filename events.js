var secondaryTextLength = 0;
var secondaryText = '';
var i = 0;
var subTextElement = $('#secondaryText');

var main = function(){
	//Hide the mail form when site starts;
	$('#mail-form').hide();

	//Move it up and down
	$('#scrollBtn').on({
		mouseover: function(){
			$(this).animate({ top: '450px' });
		},
		mouseout: function(){
			$(this).animate({ top: '440px' });
		}
	});

	$('#menu-icon').on({
		click: function(){
			var visible = $('#menu-items').css('visibility');
			
			if (visible === "hidden"){
				$('#menu-items').css('visibility','visible');
			}else{
				$('#menu-items').css('visibility','hidden');
			}
		}
	});

	$('#menu-items').click(function(){
		$('#menu-items').css('visibility','hidden');
	});

	//Mouse over Sections animations
	//TODO Make code more efficient
	$('#aboutSection').on({
		mouseenter: function(){
			$('#underliner1').animate({ width: '150px' });
		},
		mouseleave: function(){
			$('#underliner1').animate({ width: '50px' });
		}
	});
	$('#experienceSection').on({
		mouseenter: function(){
			$('#underliner2').animate({ width: '150px' });
		},
		mouseleave: function(){
			$('#underliner2').animate({ width: '50px' });
		}
	});
	$('#projectSection').on({
		mouseenter: function(){
			$('#underliner3').animate({ width: '150px' });
		},
		mouseleave: function(){
			$('#underliner3').animate({ width: '50px' });
		}
	});
	$('#contactSection').on({
		mouseenter: function(){
			$('#underliner4').animate({ width: '150px' });
		},
		mouseleave: function(){
			$('#underliner4').animate({ width: '50px' });
		}
	});

	//Open up the form
	$('#mail-icon').on({
		click: function(){
			$('#mail-form').slideToggle();

			var imgsrc = $(this).attr("src");

			if (imgsrc === "./images/logos/mail-closed.png"){
				imgsrc = "./images/logos/mail-open.png";
			}else{
				imgsrc = "./images/logos/mail-closed.png";
			}

			$(this).attr("src", imgsrc);
		}
	});

	$('#github-icon').on({
		mouseover: function(){
			$(this).attr("src","./images/logos/github-on.png");
		},
		mouseout: function(){
			 $(this).attr("src","./images/logos/github-off.png");
		}
	});

	$('#linkedin-icon').on({
		mouseover: function(){
			$(this).attr("src","./images/logos/linkedin-on.png");
		},
		mouseout: function(){
			$(this).attr("src","./images/logos/linkedin-off.png");
		}
	});


//-- ANIMATE SECONDARY TEXT --
	//setInterval('cursorAnimation()', 600);
	if (window.innerWidth > 768){
		TypingEffect();
	}else{
		$('#secondaryText').html("Student | Learner | Achiever");
	}
	
}

var text = new Array("I'm a Student", "I'm a Learner", "I'm an Achiever", "Student | Learner | Achiever");

//Code from: http://codepen.io/stathisg/pen/Bkvhg
var TypingEffect = function() {

	if (i < text.length) {
		secondaryText = text[i];
		type();
		if (i < 3) {
			//Animate secondary text
			setTimeout('ErasingEffect()', 1500);
		}else{
			//Show my name
			$('#name').fadeTo(3000, 1);
		}
		i++;
		setTimeout('TypingEffect()', 2500);
	}
}

var type = function() {
	subTextElement.html(secondaryText.substr(0, secondaryTextLength++));
	if (secondaryTextLength < secondaryText.length + 1) {
		setTimeout('type()', 50);
	} else {
		secondaryTextLength = 0;
		secondaryText = '';
	}
}

var ErasingEffect = function() {
	secondaryText = subTextElement.html();
	secondaryTextLength = secondaryText.length;
	if (secondaryTextLength > 0) {
		erase();
	}
}

var erase = function() {
	subTextElement.html(secondaryText.substr(0, secondaryTextLength--));
	if (secondaryTextLength >= 0) {
		setTimeout('erase()', 50);
	} else {
		secondaryTextLength = 0;
		secondaryText = '';
	}
}

// function cursorAnimation() {
// 	$('#textCursor').animate({
// 		opacity: 0
// 	}, 'fast', 'swing').animate({
// 			opacity: 1
// 		}, 'fast', 'swing');
// }

$(document).ready(main);