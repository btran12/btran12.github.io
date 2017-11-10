<?php
	//Start the session to get the values
   session_start();
   
   // remove all session variables
   session_unset();

   // destroy the session
   session_destroy();

   //Redirect to main page
   header('Refresh: 0; URL = index.php');
?>
