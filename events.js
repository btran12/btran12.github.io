	var captionLength = 0;
	var caption = '';
	var text = new Array("I am a student", "I am a learner", "I am an achiever", "A Student | A Learner | An Achiever");
	var i = 0;
	var captionEl = $('#secondaryText');

	var main = function(){
	//Hide the mail form when site starts;
	$('#mailForm').hide();

	//Move it up and down
	$('#scrollBtn').on({
		mouseover: function(){
			$(this).animate({ top: '87%' });
		},
		mouseout: function(){
			$(this).animate({ top: '85%' });
		}
	});

	//Open up the form
	$('#sendMailIcon').click(function(){
		$('#mailForm').slideToggle();
	});

	//The Send Button
	$('#sendButton').mouseover(function(){
		var email = $('#emailField').val();
		var message = $('#messageField').val();

		if (email.length < 1 || message.length < 1){
			alert("The Email, or Message cannot be blank!");
		}
	})

	//Mouse over Sections
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

//-- ANIMATE SECONDARY TEXT --
	//setInterval('cursorAnimation()', 600);
	TypingEffect();

}

var TypingEffect = function() {

	if (i < text.length) {
		caption = text[i];
		type();
		if (i < 3) {
			setTimeout('ErasingEffect()', 2000);
		}
		i++;
		setTimeout('TypingEffect()', 3000);
	}
}

var type = function() {
	captionEl.html(caption.substr(0, captionLength++));
	if (captionLength < caption.length + 1) {
		setTimeout('type()', 50);
	} else {
		captionLength = 0;
		caption = '';
	}
}

var ErasingEffect = function() {
	caption = captionEl.html();
	captionLength = caption.length;
	if (captionLength > 0) {
		erase();
	}
}

var erase = function() {
	captionEl.html(caption.substr(0, captionLength--));
	if (captionLength >= 0) {
		setTimeout('erase()', 50);
	} else {
		captionLength = 0;
		caption = '';
	}
}

// function cursorAnimation() {
// 	$('#textCursor').animate({
// 		opacity: 0
// 	}, 'fast', 'swing').animate({
// 		opacity: 1
// 	}, 'fast', 'swing');
// }

$(document).ready(main);