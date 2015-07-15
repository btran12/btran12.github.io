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
}

$(document).ready(main);