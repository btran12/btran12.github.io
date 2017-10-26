<?php
	/**
	*	Display a vertical navigation bar
	**/

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
					<i class='material-icons' style='position:relative;top:5px;margin-right:20px'>&#xE878;</i>
					<span>Upcoming</span>
				</a>
			</li>
			<li>
				<a href='index.php?page=now' class='".$two."'>
					<i class='material-icons' style='position:relative;top:5px;margin-right:20px'>&#xE87C;</i>
					<span>Now Playing</span>
				</a>
			</li>
			<li>
				<a href='index.php?page=popular' class='".$three."'>
					<i class='material-icons' style='position:relative;top:5px;margin-right:20px'>&#xE87D;</i>
					<span>Popular</span>
				</a>
			</li>
			<li>
				<a href='index.php?page=top' class='".$four."'>
					<i class='material-icons' style='position:relative;top:5px;margin-right:20px'>&#xE838;</i>
					<span>Most Rated</span>
				</a>
			</li>
			<li>
				<a href='showtimes.php' class='".$eleven."'>
					<i class='material-icons' style='position:relative;top:5px;margin-right:20px'>&#xE192;</i>
					<span>Showtimes</span>
				</a>
			</li>
			<li><hr></li>
			<li>
				<a href='login.php' class='".$admin_page."'>
					<i class='material-icons' style='position:relative;top:5px;margin-right:20px'>&#xE853;</i>
					<span>Account</span>
				</a>
			</li>
			<li>
				<a href='dynamic.php'>
					<i class='material-icons' style='position:relative;top:5px;margin-right:20px'>&#xE42B;</i>
					<span>Dynamic View</span>
				</a>
			</li>
			<li>
				<a href='movie_lookup.php' class='".$ten."'>
					<i class='material-icons' style='position:relative;top:5px;margin-right:20px'>&#xE8B6;</i>
					<span>Search</span>
				</a>
			</li>";
	//If the user is logged in display a new item with the username
	$isValid = isset($_SESSION["valid"]) ? $_SESSION["valid"] : false;
	if ($isValid){
		echo "
			<li>
				<a href='logout.php'>
					<button type='button' class='btn btn-default btn-sm' style='position:relative;'>
						<span class='glyphicon glyphicon-log-out'></span> Log out
					</button>
				</a>
			</li>";
	}
	echo "
		<ul>
	</div>";
?>
