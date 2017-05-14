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
					<i class='material-icons'>&#xE878;</i> Upcoming
				</a>
			</li>
			<li>
				<a href='index.php?page=now' class='".$two."'> 
					<i class='material-icons'>&#xE87C;</i> Now Playing
				</a>
			</li>
			<li>
				<a href='index.php?page=popular' class='".$three."'> 
					<i class='material-icons'>&#xE87D;</i> Popular 
				</a>
			</li>
			<li>
				<a href='index.php?page=top' class='".$four."'> 
					<i class='material-icons'>&#xE838;</i> Most Rated
				</a>
			</li>
			<li>
				<a href='showtimes.php' class='".$eleven."'> 
					<i class='material-icons'>&#xE192;</i> Showtimes
				</a>
			</li>
			<li><hr></li>
			<li>
				<a href='admin_page.php' class='".$admin_page."'> 
					<i class='material-icons'>&#xE853;</i> Account 
				</a>
			</li>
			<li>
				<a href='dynamic.php'>
					<i class='material-icons'>&#xE42B;</i> Dynamic View
				</a>
			</li>
			<li>
				<a href='movie_lookup.php' class='".$ten."'> 
					<i class='material-icons'>&#xE8B6;</i> Search
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
