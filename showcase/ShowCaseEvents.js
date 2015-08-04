var linkToProjects = new Array(
	"http://baotran.xyz/projects/Escape",
	"http://baotran.xyz/projects/History-Timeline");
var projectsDescriptions = new Array(
	"A basic avoid the enemies game. The game takes the concept of Pacman and simplifies it down to the bare of the bones. \
	The objective of the game is to stay alive for as long as possible. The player can move around with the arrow keys. \
	The difficulty of the game increases over time. Good luck.!",
	"A timeline from 1865 to 1880. Hover over an event to get a better look into the period."
	);
var projectsTitle = new Array("No Escape", "History Timeline 1865 - 1880", "Queue Visualization", "Digit");

//Iframe
// var switchTarget$ = $('.switch-project');

// function switchIframeSrc(target) {
//   // set the 'src' attribute of the iframe
//   switchTarget$.attr('src', target);
// }

var main = function(){
	// $('.EscapeProject').click(function(){
	// 	switchIframeSrc(linkToProjects[0]);
	// });
	// $('.TimelineProject').click(function(){
	// 	switchIframeSrc(linkToProjects[1]);
	// });

	$(".snapshots").on("click", "img", function(e){
		
    	var $target = $(e.currentTarget);
    	$target.animate({
    		width: '90px',
    		height: '90px'
    	}, 200);
    	$(".snapshots").children("li").css({"width": "100px", "height":"100px"});
	});

	$("#left-arrow").hover(
		function(){
			$(this).animate({
				opacity: '1'
			},200);
		},
		function(){
			 $(this).animate({
				opacity: '.4'
			},200);
		}
	);
	$("#right-arrow").hover(
		function(){
			$(this).animate({
				opacity: '1'
			},200);
		},
		function(){
			 $(this).animate({
				opacity: '.4'
			},200);
		}
	);
}

$(document).ready(main);
