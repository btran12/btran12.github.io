<?php
session_start();
if ($_SESSION['valid'] && $_SESSION['username']){
?>
<html>
  <head>
    <title>Add Movie</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  <body>
    <?php
      include "nav-bar.php";
    ?>

    <div class="document">

    </div>
    
  </body>
</html>
<?php
}else{
	//Error message and redirect when the user is not authorized
	echo "<title>Error 401 Unauthorized</title>";
	echo "<h1>Error 401 Unauthorized</h1>";
	header('Refresh: 3; URL = index.php');
	die();
}
?>
