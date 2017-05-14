<html>
	<head>
		<title>Movie Search</title>
		<link rel="stylesheet" type="text/css" href="styles.css">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	</head>

<body>
<?php
	//Set the search link on the navigation bar as active
	$ten = "active";
	include "nav-bar.php";

?>
	<div class="document">
	
		<h1><center>Movie Search</center></h1>
		<hr>
		<table>
			<tr><td>
				<form>
					<input type="text" name="query" placeholder="Search Title" onkeydown="showSuggestions(this.value)" style="width:300px" required>
				</form>
			</td></tr>
			<tr><td>
				<ul id="movies-list"></ul>
			</td></tr>
		</table>
	</div>

	<script>

		function showSuggestions(searchStr){

			/* ============================== */
			var xhr = new XMLHttpRequest();
			var url = "https://api.themoviedb.org/3/search/movie?api_key=4c40b76e885cbdd0161087ef43a8fce5&language=en-US&query="+searchStr;
			var response;
			var results = [];
			var results_ids = [];
			xhr.onreadystatechange = function() {
			    if (this.readyState == 4 && this.status == 200) {
			        response = JSON.parse(this.responseText);
			        for (x = 0; x < response.results.length; x++){
			        	results.push(response.results[x].title);
			        	results_ids.push(response.results[x].id);
			        }

			        var list = document.getElementById("movies-list");

					//Remove all list items if there are any
					while(list.hasChildNodes()){
						list.removeChild(list.firstChild);
					}

					for (i = 0; i < results.length; i++){
						// Create list item element with link to the movie page based on the ID
						var li = document.createElement("LI");
						var textNode = document.createTextNode(results[i]);
						var a = document.createElement('a');
						a.href= "movie_page.php?id="+results_ids[i];
						a.appendChild(textNode);
						li.appendChild(a);
						document.getElementById("movies-list").appendChild(li);
						
					}

			    }
			};
			xhr.open("GET", url, true);
			xhr.send();
			/* ============================== */

			
		}
	</script>
</body>

</html>



