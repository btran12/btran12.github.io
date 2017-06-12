<?php
// To toggle administrator options like edit/remove reviews
session_start();

//Review formed posted and contains data?
if (empty($_POST)){
	$movie_id = $_GET["id"];

	$service_query = $movie_id;
	include dirname(__DIR__)."/movies-database/service/request.php";

	$title = $response->title;
	$release_date = $response->release_date;
	$runtime = $response->runtime;
	$vote_average = $response->vote_average;
	$overview = $response->overview;
	$secure_base_url = "https://image.tmdb.org/t/p/";
	$path = isset($response->backdrop_path) ? $response->backdrop_path : $response->belongs_to_collection->backdrop_path;
	$backdrop_path = $secure_base_url."w1280".$path;
	$poster_path = $secure_base_url."w780".$response->poster_path;

?>
<?php
	//Youtube API ---------------------------
	$DEVELOPER_KEY = "AIzaSyBBj3selsO2bOhTYRuR6ZxmJxRzup2Bx5c";

	$base_url = "https://www.googleapis.com/youtube/v3/search?part=id&q=";
	$url_query = rawurlencode($title . " trailer");

	//Get data
	$json = file_get_contents($base_url.$url_query."&key=".$DEVELOPER_KEY);

	//Decoded json as a multidimensional array
	$obj = json_decode($json);
	//Just need the video ID to embed into the youtube player
	$youtube_video_id = $obj->items[0]->id->videoId;
?>

<?php
	include "nav-bar.php";
?>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="styles.css">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<title><?php echo $title; ?></title>
		<!-- JQuery -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
		<script> 
			$(document).ready(function(){
				// Function to open and close the add a review form.
			    $("#open-review-container").click(function(){
			        $("#write-review-container").slideToggle();
			    });
			});
		</script>
	</head>

<body>
	<!-- top refers to the upper method or the parent of the current div -->
	<div id="videoPopup" onclick="top.close()">
		<iframe id="youtube-frame" src="" frameborder="0" allowfullscreen></iframe>
	</div>
	<!-- MOVIE INFORMATION SECTION
	==============================================
	-->
	<div class="document">

		<center>
			<h1 style="display:inline">
				<?php echo $title; ?>
			</h1>
			<h1 style="display:inline;margin-left:10px;font-size:16px">
				<?php echo " " . formatDate($release_date); ?>
			</h1>
		</center>
		<hr>
		<table width="100%">
			<tr>
				<td align="center" width="100%">
					<div class="video" onclick="openPlayer()">
					    <img id="video-thumbnail" src="">
					    <span></span><!-- play button image on top of video thumbnail -->
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<p><?php echo $overview ?></p>
				</td>
			</tr>
		</table>
		<br>
		<hr>
		<!-- USER REVIEWS FORM
		==================================================== -->		
		<h2><p style="font-size:24px;font-weight:600;">User Reviews</p></h2>
		<form action="movie_page.php" method="POST">
			<!-- Only allow users to write reviews -->
			<?php
				if (isset($_SESSION['valid'])){
					echo "<button type='button' id='open-review-container'>Write Review</button>";
				}
			?>
			<div id="write-review-container">
				<table>
					<?php echo "<input type='hidden' name='movie_id' value='".$movie_id."'>"; ?>
					<tr>
						<td colspan="2">
							<input type="text" placeholder="Your Name" name="user_name" pattern="^[a-zA-Z 0-9]*$" title="Text and or Numbers only" required>
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<textarea placeholder="Your Review" name="user_review" rows="10" cols="70" pattern="^[a-zA-Z 0-9]*$" title="Text and or Numbers only" required></textarea>
						</td>
					</tr>
					<tr>
						<td width="50px">
							<input type="number" name="user_rating" min="0" max="10" step="0.1" value="0">
						</td>
						<td>
							<input type="submit" value="+" style="font-size:20px;font-weight:bold">
						</td>
					</tr>
				</table>
			</div>
		</form>
		<!--USER REVIEWS SECTION
		====================================================
		-->
		<div class="user-reviews">
			<table width="80%">
			<?php
				include "connect_server.php";
				//Get Reviews Information linked by movie id
				$QUERY = "SELECT * FROM btran6291_REVIEW WHERE movie_id = " . $movie_id ." ORDER BY Review_date desc"; 
				$q = $conn->prepare($QUERY);
				$q->execute();
				$q->setFetchMode(PDO::FETCH_BOTH);

				// Print all the available reviews for this particular movie 
				while($r=$q->fetch()){
					echo "<tr>
						<td colspan='3' height='10'>
						<hr style='background-image:none;'>";

					//Review Update and Delete options will only show up if it's the admin
					$tmp_user = isset($_SESSION['username']) ? $_SESSION['username'] : "";

					if (isset($_SESSION['valid']) && ($tmp_user == 'btran')){
						echo "<a href='update_review.php?id=".$r["ID"]."'>Edit</a>
						<a href='delete_review.php?id=".$r["ID"]."&movieid=".$movie_id."' style='margin-left:50px;color:red'>Remove</a>";
					}
					echo "</td>
						</tr>";
					echo "<tr>";
					echo "<td width='100px'>
							<p>By: <font color='#0099ff'>". $r["reviewer_name"]  ."</font></p>
						</td>";
					echo "<td width='100px'>
							<p>Rating: <font color='#ff8c1a'>". $r["Review_rating"] . "</font></p>
						</td>";
					echo "<td>
							<p><b>Posted on</b>: ". $r["Review_date"] ."</p>
						</td>";
					echo "</tr>";
					echo "<tr>";
					echo "<td colspan='3']>
						<p>". $r["Reviewer_review"]."</p>";
					echo "</td>
						</tr>";	
				}
			?>
			</table>
		</div>
	</div>

	<script>
		// Video embed link with video ID
		var videoSrc = "https://www.youtube.com/embed/" + <?php echo '"'.$youtube_video_id.'"'; ?> + "?rel=0&iv_load_policy=3&amp;showinfo=0&autoplay=1";

		// Video thumbnail link with video ID
		var videoThumbnail = "http://img.youtube.com/vi/" + <?php echo '"'.$youtube_video_id.'"'; ?> + "/maxresdefault.jpg";

		document.getElementById('video-thumbnail').src = videoThumbnail;
		
		/**
		*	Show the div on top of the current document and autoplay Youtube video
		**/
		function openPlayer(){
			document.getElementById('videoPopup').style.display = "block";
			document.getElementById('youtube-frame').src = videoSrc;
		}
		/**
		*	Close the current div on top when the user click outside of the iframe
		*	Reset iframe link to stop Youtube video from playing still even though the frame is not seen
		**/
		function close(){
			document.getElementById('videoPopup').style.display = "none";
			document.getElementById('youtube-frame').src = "";
		}
	</script>

</body>
</html>
<?php
}else{
	//TODO remove check if POST is empty to prevent the page from refreshing too many times

	//Clean data just in case of injections
	$username = sanitize($_POST["user_name"]);
	$userrating = sanitize($_POST["user_rating"]);
	$userreview = sanitize($_POST["user_review"]);
	$movieid = sanitize($_POST["movie_id"]);

	//Get the current date
	$date = date("Y-m-d h:i:sa");

	include 'connect_server.php';

	$QUERY = "INSERT INTO btran6291_REVIEW(
							reviewer_name,
							Reviewer_review,
							Review_date,
							Review_rating,
							movie_id) 
							VALUES(?,?,?,?,?)";

	$q = $conn->prepare($QUERY);

	// Add review to the database and refresh
	if($q->execute(array($username,$userreview,$date,$userrating,$movieid))){
		echo "<script>document.location ='movie_page.php?id=". $movieid. "';</script>"; 
	}else{
		echo $q->errorCode();
	}

	//Close connection to database
	$conn=null;
}
/**
*	Strip data of slashes and tags to preven injections
*	$data - The string to be sanitized
**/
function sanitize($data){
	$data=stripslashes($data); 
	$data=strip_tags($data);
	$data=preg_replace("/[^a-zA-Z0-9]+/", "", $data);
	return $data;
}
/**
*	Convert string to date format (# month ####)
*	$date - the string to be formatted
**/
function formatDate($date){
	$dateObject = date_create($date);
	return date_format($dateObject, "j F Y");
}
?>
