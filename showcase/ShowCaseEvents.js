var projectSrcs = new Array(
	"../projects/Escape/",
	"../projects/History-Timeline/",
	"../projects/Visualize-Queue/");
var projectDescriptions = new Array(
	"A basic avoid the enemies game. The game takes the concept of Pacman and simplifies it down to the bare of the bones. \
	The objective of the game is to stay alive for as long as possible. The player can move around with the arrow keys. \
	The difficulty of the game increases over time. Good luck.!",
	"Historical events timeline from 1865 to 1877. Hover over an event to get a better look into the period.",
	"See how the Queue Data Structure works visually. From enqueue to dequeue, the animation will play through step\
	by step with accompanying code. This was one of the first projects that I tried to replicate from visualgo.net, so the functionalities are very limited."
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
	var rows = $('table.table-contents tr');

	$('.layout').mousemove(function(event){
		if (event.pageY < 50){
			rows.filter('.project-navigator').show();
		}
		else if (event.pageY > 100){
			rows.filter('.project-navigator').hide();
		}
	});

	$(".snapshots").on("mouseover", "img", function(e){
    	var $target = $(e.currentTarget);
    	$target.animate({
    		opacity: '1'
    	}, 200);
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
    			$('#view-github').show();
    			break;
    		case "Timeline":
    			index = 1;
    			$('#view-github').hide();
    			break;
    		case "Queue":
    			index = 2;
    			$('#view-github').hide();
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
