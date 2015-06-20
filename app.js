var main = function(){
	$('.university').click(function(){
		window.open("http://www.westfield.ma.edu");
	});

	$('.scroll').click(function(){
		window.scrollBy(0,500);
	});

}

$(document).ready(main);