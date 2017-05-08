<?php
	//Value determines which page to display.
	$page = isset($_GET["page"]) ? $_GET["page"] : "";
	$page_title = "";

	//Shorten the sql command, for better viewability
	$releaseYear = "SUBSTRING(movie_released_date,1, 4)";
	$releaseMonth = "SUBSTRING(movie_released_date,6, 2)";
	$releaseDay = "SUBSTRING(movie_released_date,9, 2)";

	//Values to set link on navigation bar as active
	$one = $two = $three = $four = $ten = $eleven = "";
	$visibility = "visible";

	//Popluate different pages with different information
	switch($page){ 
		
		case "upcoming":
			$service_query="upcoming";

			$page_title = "Upcoming";
			$one = "active";
			$visibility = "hidden";
			break;
		case "now":
			$service_query="now_playing";

			$page_title = "Now Playing";
			$two = "active";
			break;
		case "popular":
			$service_query="popular";

			$page_title = "Popular";
			$three = "active";
			break;
		case "top":
			$service_query="top_rated";

			$page_title = "Top Rated";
			$four = "active";
			
			break;
		default: //Same as main
			$page_title = "Now Playing";
			$service_query="now_playing";

	}//end switch 

	//service query is used as an input into request.php
	include dirname(__DIR__)."/movies-database/service/request.php";
	$results=$response->results;
	
?>
<!doctype html>
<html lang="en">
<head>
	<title><?php echo $page_title . " - Bao Tran MovieDB"; ?></title>
	<link rel="stylesheet" type="text/css" href="styles.css">
<<<<<<< HEAD
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
=======

	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<script>
	  (adsbygoogle = window.adsbygoogle || []).push({
	    google_ad_client: "ca-pub-9745487770270867",
	    enable_page_level_ads: true
	  });
	</script>
>>>>>>> 9f47c4adbc78bed3262ea12998f49187cb7a2f93
</head>

<body>
	
<?php
	include "nav-bar.php";
?>
<!--DOCUMENT
==================================================
-->
<div class="document">
	<br><h1><center><?php echo $page_title; ?></center></h1>

	<table width="100%">
		<?php
			//Populate the page with rows of movies 
			for ($x = 0; $x < count($results); $x++){
				
				$movie_id		= $results[$x]->id;
				$poster_url 	= "https://image.tmdb.org/t/p/w500/".$results[$x]->poster_path;
				$movie_released_date= $results[$x]->release_date;
				$movie_title	= $results[$x]->title;
				$movie_plot 	= $results[$x]->overview;
				$movie_rating	= $results[$x]->vote_average;
				
				echo "
				<tr>
					<td width='250px'>
						<a href='movie_page.php?id=".$movie_id."'>
						<img src='". $poster_url ."' style='width:250px;height:350px;' alt='".$movie_title."' class='imgBox'>
						</a>
					</td>
					<td width='65%' style='vertical-align:bottom;'>
						<div class='movie_title' style='display:inline'>
							". $movie_title ."
						</div>
						<p style='display:inline;margin-left:15px'>
							". formatDate($movie_released_date) ."
						</p>
						<p>
						". $movie_plot. "
						</p>
					</td>
					<td width='15%' align='center'>
						<div class='movie_rating' style='visibility:".$visibility."'>
							". $movie_rating . "
						</div>
					</td>
				</tr>";
			}
			
		?>
		<?php
			/**
			*	Convert the string to date format (# month ####)
			*	$date - The string to be formatted
			**/
			function formatDate($date){
				$dateObject = date_create($date);
				return date_format($dateObject, "j F Y");
			}
		?>

	</table>
</div>

</body>

</html>
