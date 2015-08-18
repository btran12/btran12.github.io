var projectSrcs = new Array(
	"../projects/Escape/index.html",
	"../projects/History-Timeline/index.html",
	"../projects/Visualize-Queue/index.html");
var projectDescriptions = new Array(
	"A basic avoid the enemies game. The game takes the concept of Pacman and simplifies it down to the bare of the bones. \
	The objective of the game is to stay alive for as long as possible. The player can move around with the arrow keys. \
	The difficulty of the game increases over time. Good luck.!",
	"Historical events timeline from 1865 to 1877. Hover over an event to get a better look into the period.",
	"See how the Queue Data Structure works visually. From enqueue to dequeue, the animation will play through step\
	by step with the accompanying code. This was one of the first projects that I tried to replicate from visualgo.net, \
	so the functionaly is very limited."
	);
var projectTitles = new Array("No Escape", "History Timeline 1865 - 1880", "Queue Visualization", "Digit");
var previewImages = new Array(["","",""],["","",""],["","",""]);
var projectIndex = 0;

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
		if (event.pageY < 25){
			$('.project-navigator').find('div').fadeIn(300);
			$('.project-navigator').show();
		}
		else if (event.pageY > 100){ //Mouse out
			$('.project-navigator').find('div').fadeOut(300);
			setTimeout(function(){$('.project-navigator').hide();}, 350);
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

    	switch(projectName){
    		case "NoEscape":
    			projectIndex = 0;
    			$('#view-github').hide();
    			break;
    		case "Timeline":
    			projectIndex = 1;
    			$('#view-github').hide();
    			break;
    		case "Queue":
    			projectIndex = 2;
    			$('#view-github').hide();
    			break;
    		case "Digit":
    			projectIndex = 3;
    			$('view-github').show();
    			$('view-github').attr("href", "http://www.github.com/btran12/Digit/");
    	}

    	switchProject(projectIndex);
	});

	$("#left-arrow, #right-arrow").hover(
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

	$("#right-arrow").click(function(){
		if (projectIndex < projectSrcs.length - 1){
			projectIndex++;
		}else{
			projectIndex = 0;
		}

		switchProject(projectIndex);
	});

	$("#left-arrow").click(function(){
		if (projectIndex > 0){
			projectIndex--;
		}else{
			projectIndex = projectSrcs.length -1;
		}

		switchProject(projectIndex);
	})
}

$(document).ready(main);
