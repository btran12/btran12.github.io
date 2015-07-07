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

	$('#sendMail').click(function(){
		$('#mailForm').toggle();
	});
}

$(document).ready(main);