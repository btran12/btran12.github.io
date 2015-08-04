var projectSrcs = new Array(
	"http://baotran.xyz/projects/Escape",
	"http://baotran.xyz/projects/History-Timeline",
	"http://www.baotran.xyz/projects/Visualize-Queue");
var projectDescriptions = new Array(
	"A basic avoid the enemies game. The game takes the concept of Pacman and simplifies it down to the bare of the bones. \
	The objective of the game is to stay alive for as long as possible. The player can move around with the arrow keys. \
	The difficulty of the game increases over time. Good luck.!",
	"A timeline from 1865 to 1880. Hover over an event to get a better look into the period.",
	"See how the Queue Data Structure works visually. From enqueue to dequeue, the animation will play through step\
	by step with accompany code."
	);
var projectTitles = new Array("No Escape", "History Timeline 1865 - 1880", "Queue Visualization", "Digit");

function switchFrameSrc(source) {
  $('.project-frame').attr('src', source);
}

function switchTitleValue(value){
	$('.project-title').html(value);
}

function switchDescriptionValue(value){
	$('.project-description').html(value);
}

function switchProject(index){
	switchFrameSrc(projectSrcs[index]);
	switchTitleValue(projectTitles[index]);
	switchDescriptionValue(projectDescriptions[index]);
}

var main = function(){

	$(".snapshots").on("mouseover", "img", function(e){
    	var $target = $(e.currentTarget);
    	$target.animate({
    		opacity: '1'
    	}, 200);

    	console.log($target.attr("alt"));
	});

	$(".snapshots").on("mouseout", "img", function(e){
    	var $target = $(e.currentTarget);
    	$target.animate({
    		opacity: '.7'
    	}, 200);
	});

	$(".snapshots").on("click", "img", function(e){
		//Using the image alt attribute to determine which project to switch to
    	var $target = $(e.currentTarget);
    	var projectName = $target.attr("alt");
    	var index = 0;

    	switch(projectName){
    		case "NoEscape":
    			index = 0;
    			break;
    		case "Timeline":
    			index = 1;
    			break;
    		case "Queue":
    			index = 2;
    			break;
    	}

    	switchProject(index);
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
