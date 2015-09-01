var secondaryTextLength = 0;
var secondaryText = '';
var i = 0;
var subTextElement = $('#secondary-text');
var canSee = true;

var main = function(){
	//Hide the mail form when site starts;
	$('#mail-form').hide();

	//Animate Navigation Bar on scroll
	$(window).scroll(function(){
        var windowTop = $(window).scrollTop();
        
        //130 is Top position of the #header-name element
        if (windowTop > 130 && canSee) {
        	$('#normal-nav').animate({
	          height: '65px',
	          backgroundColor: '#3B3A35'
	        }, 500);
	        $('#bao-tran').css('visibility', 'visible');
	        $('#bao-tran').animate({
	        	height: '40px',
	        	opacity: '1'
	        }, 500);
	        canSee = false;
        }else if (windowTop <= 130 && !canSee){
        	$('#normal-nav').animate({
	          height: '80px',
	          backgroundColor: 'transparent'
	        }, 1000);
	        $('#bao-tran').animate({
	        	height: '0px',
	        	opacity: '0'
	        }, 500);
	        canSee = true;
        }
    });

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

	//Mouse over s animations
	//TODO Make code more efficient
	$('#about').on({
		mouseenter: function(){
			$('#underliner1').animate({ width: '150px' });
		},
		mouseleave: function(){
			$('#underliner1').animate({ width: '50px' });
		}
	});
	$('#experience').on({
		mouseenter: function(){
			$('#underliner2').animate({ width: '150px' });
		},
		mouseleave: function(){
			$('#underliner2').animate({ width: '50px' });
		}
	});
	$('#project').on({
		mouseenter: function(){
			$('#underliner3').animate({ width: '150px' });
		},
		mouseleave: function(){
			$('#underliner3').animate({ width: '50px' });
		}
	});
	$('#contact').on({
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
	
}//MAIN

//Code from: http://codepen.io/stathisg/pen/Bkvhg
var TypingEffect = function() {
	secondaryText = "Student | Learner | Achiever";
	type();
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

// var ErasingEffect = function() {
// 	secondaryText = subTextElement.html();
// 	secondaryTextLength = secondaryText.length;
// 	if (secondaryTextLength > 0) {
// 		erase();
// 	}
// }

// var erase = function() {
// 	subTextElement.html(secondaryText.substr(0, secondaryTextLength--));
// 	if (secondaryTextLength >= 0) {
// 		setTimeout('erase()', 50);
// 	} else {
// 		secondaryTextLength = 0;
// 		secondaryText = '';
// 	}
// }

/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        
        // 65 is the height of the navigation bar
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 65
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(main);