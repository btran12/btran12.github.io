<?php
	/**
	*	Display a vertical navigation bar
	**/
	if (session_status() == PHP_SESSION_NONE) {
    	session_start();
	}
	if (!isset($one) && !isset($two) && !isset($three) && !isset($four) && !isset($ten) && !isset($eleven)){
		$admin_page="active";
	}
	$one = isset($one) ? $one : "";
	$two = isset($two) ? $two : "";
	$three = isset($three) ? $three : "";
	$four = isset($four) ? $four : "";
	$ten = isset($ten) ? $ten : "";
	$eleven = isset($eleven) ? $eleven : "";
	$admin_page = isset($admin_page) ? $admin_page : "";

	//The number variables are in the parent file that includes this file.
	echo "
	<div class='navigation-bar'>
		<ul>
			<li>
				<a href='index.php?page=upcoming' class='".$one."'>
					Upcoming
				</a>
			</li>
			<li>
				<a href='index.php?page=now' class='".$two."'> 
					Now Playing
				</a>
			</li>
			<li>
				<a href='index.php?page=popular' class='".$three."'> 
					Popular 
				</a>
			</li>
			<li>
				<a href='index.php?page=top' class='".$four."'> 
					Most Rated
				</a>
			</li>
			<li>
				<a href='showtimes.php' class='".$eleven."'> 
					Showtimes Near You
				</a>
			</li>

			<li>
				<a href='admin_page.php' class='".$admin_page."'> 
					Administration
				</a>
			</li>
			<li>
				<a href='dynamic.php'>
					Dynamic View
				</a>
			</li>
			<li>
				<a href='movie_lookup.php' class='".$ten."'> 
					Search <img src='https://cdn1.iconfinder.com/data/icons/free-98-icons/32/search-128.png' style='width:16px;height:16px;'>
				</a>
			</li>";
	//If the user is logged in display a new item with the username
	$isValid = isset($_SESSION["valid"]) ? $_SESSION["valid"] : false;
	if ($isValid){
		echo "
			<li>
				<a href='logout.php' id='user-session-label'>
					Log Out of ".$_SESSION["username"].
				"</a>
			</li>";
	}
	echo "
		<ul>
	</div>";
?>
