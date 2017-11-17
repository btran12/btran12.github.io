<?php
	session_start();
	/**
	*	Display a vertical navigation bar
	**/

	$base_url = "index.php?page=";
	$nav_pages 	= array("index.php?page=upcoming", "index.php?page=now", "index.php?page=popular", "index.php?page=top", "showtimes.php", "login.php", "dynamic.php", "movie_lookup.php");
	$icons 		= array("&#xE878;","&#xE87C;","&#xE87D;","&#xE838;","&#xE192;","&#xE853;","&#xE42B;","&#xE8B6;");
	$page_titles= array("Upcoming", "Now Playing", "Popular", "Most Rated", "Showtimes", "Account", "Dynamic View", "Search");
?>
	<div class='navigation-bar'>
		<div style="width:100%;height:20px"></div>
		<ul>
			<?php
				if ($_SESSION["valid"]){
					echo "<li>
							<center><img src='images/profile-icon.png' alt='Placeholder profile image' height='90' width='90' style='border-radius:50%'></center>
						</li>";
				}


				for($x = 0; $x < count($nav_pages); $x++) {
					$setActive = ($x == $page_active) ? "active" : "";
					if ($x == 5) {
						echo "<li><hr></li>"; // Separate views with configurables 
					}
					echo "<li>";
						echo "<a href='".$nav_pages[$x]."' class='$setActive'>";
							echo "<i class='material-icons' style='position:relative;top:5px;margin-right:20px'>".$icons[$x]."</i>";
							echo "<span>".$page_titles[$x]."</span>";
						echo "</a>";
					echo "</li>";
				}
			?>
<?php
	//If the user is logged in display a new item with the username
	if ($_SESSION["valid"]){
		echo "
			<li>
				<a href='logout.php'>
					<button type='button' class='btn btn-default btn-md' style='position:relative;'>
						<span class='glyphicon glyphicon-log-out'></span> Log out
					</button>
				</a>
			</li>";
	}
?>
		<ul>
	</div>";
