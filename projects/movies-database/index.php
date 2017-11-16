<?php
	//Value determines which page to display.
	$page = isset($_GET["page"]) ? $_GET["page"] : "";
	$pageNum = isset($_GET["pageNum"]) ? $_GET["pageNum"] : "1";
	$page_title = "";
	$page_active = 0;

	$visibility = "visible";

	//Popluate different pages with different information
	switch($page){

		case "upcoming":
			$service_query="upcoming";
			$page_title = "Upcoming";
			$visibility = "hidden";
			$page_active = 0;
			break;
		case "now":
			$service_query="now_playing";
			$page_title = "Now Playing";
			$page_active = 1;
			break;
		case "popular":
			$service_query="popular";
			$page_title = "Popular";
			$page_active = 2;
			break;
		case "top":
			$service_query="top_rated";
			$page_title = "Top Rated";
			$page_active = 3;
			break;
		default: //Same as main
			$page_title = "Now Playing";
			$service_query="now_playing";
			$page_active = 1;
	}//end switch

	//service query is used as an input into request.php
	include dirname(__DIR__)."/movies-database/service/request.php";
	$results	= $response->results;
	$totalPages	= $response->total_pages;
	$currentPage= $response->page;

?>
<!doctype html>
<html lang="en">
<head>
	<title><?php echo $page_title . " - Bao Tran MovieDB"; ?></title>

	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="styles.css">

	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<script>
	  (adsbygoogle = window.adsbygoogle || []).push({
	    google_ad_client: "ca-pub-9745487770270867",
	    enable_page_level_ads: true
	  });
	</script>

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
	</table>
	<?php
		$prevPage = ($currentPage > 1)  ? $currentPage-1 : 1;
		$nextPage = ($currentPage < 10) ? $currentPage+1 : 10;
		// Setup pagination ; max it at 10
		echo "	<div class='center'>
					<div class='pagination'>
						<a href='index.php?page=".$service_query."&pageNum=".$prevPage."'>&laquo;</a>";
		for ($p = 1; $p < $totalPages && $p <= 10; $p++) {

			if ($p == $currentPage)
				echo "<a class='active' href='index.php?page=".$service_query."&pageNum=".$p."'>".$p."</a>";
			else
				echo "<a href='index.php?page=".$service_query."&pageNum=".$p."'>".$p."</a>";
		}
		echo "			<a href='index.php?page=".$service_query."&pageNum=".$nextPage."'>&raquo;</a>
					</div>
				</div>";
	?>
</div>

</body>

</html>
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
