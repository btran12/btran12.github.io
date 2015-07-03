var linkToProjects = new Array(
	"http://baotran.space/projects/Escape/PigScape.html",
	"http://baotran.space/projects/History-Timeline/Timeline.html");

//Iframe
var switchTarget$ = $('.switch-project');

function switchIframeSrc(target) {
  // set the 'src' attribute of the iframe
  switchTarget$.attr('src', target);
}

var main = function(){
	$('.EscapeProject').click(function(){
		switchIframeSrc(linkToProjects[0]);
	});
	$('.TimelineProject').click(function(){
		switchIframeSrc(linkToProjects[1]);
	});
}

$(document).ready(main);
