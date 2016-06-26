var secondaryTextLength = 0;
var secondaryText = '';
var i = 0;
var subTextElement = $('#secondary-text');

var canSee = true;
var navSections = new Array("nav-about", "nav-experience", "nav-project", "nav-contact");

var animSpeed = 500;	//Animation speed in milliseconds
//Section positions
var sectionOne = $('#about').position().top - 150;
var sectionTwo = $('#experience').position().top - 150;
var sectionThree = $('#project').position().top - 150;
var sectionFour = $('#contact').position().top - 150;

var main = function(){
	//Hide the mail form when site starts;
	//$('#mail-form').hide();

	//Animate Navigation Bar on scroll
	$(window).scroll(function(){
		var windowTop = $(window).scrollTop();	//Current position on scroll
		
        if (windowTop > sectionOne && windowTop < sectionTwo){
        	activateClass(0);
        }else if (windowTop > sectionTwo && windowTop < sectionThree){
        	activateClass(1);
        }else if (windowTop > sectionThree && windowTop < sectionFour){
        	activateClass(2);
        }else if (windowTop > sectionFour){
        	activateClass(3);
        }else{
        	activateClass(-1);
        }

        //100 is the point at which the navigation bar will animate
        if (windowTop > 100 && canSee) {
        	$('#normal-nav').animate({
	          height: '65px',
	          backgroundColor: '#3B3A35'
	        }, animSpeed);
	        $('#bao-tran').css('visibility', 'visible');
	        $('#bao-tran').animate({
	        	height: '40px',
	        	opacity: '1'
	        }, animSpeed);

	        canSee = false;
        }else if (windowTop <= 100 && !canSee){
        	$('#normal-nav').animate({
	          height: '80px',
	          backgroundColor: 'transparent'
	        }, animSpeed);
	        $('#bao-tran').animate({
	        	height: '0px',
	        	opacity: '0'
	        }, animSpeed);

	        canSee = true;
        }
    });//End of Scroll Function ---------------

	//Move it up and down
	$('#scrollBtn').on({
		mouseover: function(){
			$(this).animate({ top: '410px' });
		},
		mouseout: function(){
			$(this).animate({ top: '400px' });
		}
	});

	//Toggle Menu visibility
	$('#mobile-menu-icon').on({
		click: function(){
			var visible = $('#mobile-menu-items').css('visibility');
			
			if (visible === "hidden"){
				$('#mobile-menu-items').css('visibility','visible');
			}else{
				$('#mobile-menu-items').css('visibility','hidden');
			}
		}
	});
	//When menu item is click hide it aswell
	$('#mobile-menu-items').click(function(){
		$('#mobile-menu-items').css('visibility','hidden');
	});

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

	//Only animate when the screen size is > 768px
	if (window.innerWidth > 768){
		TypingEffect();
	}else{
		$('#secondary-text').html("Student | Learner | Achiever");
	}
	
}//MAIN

//Highlight sections in navigation bar
var activateClass = function(sectionIndex){
	for (i = 0; i < navSections.length; i++){
		//Remove the class from the other sections
		if (i !== sectionIndex){
			$('#'+navSections[i]).removeClass('normal-nav-active');
		}

		//Add the class to the current section
		//The check (-1) is so that I can remove the class from all sections
		if (sectionIndex !== -1){
			$('#'+navSections[sectionIndex]).addClass('normal-nav-active');
		}
	}
}

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