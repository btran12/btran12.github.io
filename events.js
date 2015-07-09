var main = function(){
	//Hide the mail form when site starts;
	$('#mailForm').hide();

	$('#scrollBtn').on({
		mouseover: function(){
			$(this).animate({ top: '87%' });
		},
		mouseout: function(){
			$(this).animate({ top: '85%' });
		}
	});

	$('#sendMailIcon').click(function(){
		$('#mailForm').slideToggle();
	});

	$('#sendButton').mouseover(function(){
		var email = $('#emailField').val();
		var message = $('#messageField').val();

		if (email.length < 1 || message.length < 1){
			alert("The Email, or Message cannot be blank!");
		}
	})
}

$(document).ready(main);