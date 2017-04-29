<?php
    // Start storing values for the current session across pages.
   session_start();
   // Allow the user to login if the current session is invalid.
   $isValid = isset($_SESSION["valid"]) ? $_SESSION["valid"] : false;
   if (!$isValid){
?>

<html lang = "en">
   <head>
      <link rel="stylesheet" type="text/css" href="styles.css">
      <title>Log In to Database</title>
   </head>
	
   <body class="login-page-body">
      <?php
         
         $markUrl = ''; //Link to either check mark or x mark

         //Username and Password validation
         if (!empty($_POST)) {
            $username = $_POST['username'];
            $password = $_POST['password'];

            if ($username == 'btran' && $password == '6291') {

               $_SESSION['valid'] = true;
                //Redirect to different places depending on the user
               if ($username == 'btran'){
                  $_SESSION['username'] = 'btran';
                  header('Refresh: 1; URL = add_movie.php');
               }
               die();
            }else {
               $markUrl = 'https://cdn0.iconfinder.com/data/icons/16x16-free-toolbar-icons/16/33.png';
            }
         }
      ?>
        <!-- Login Form
        ======================================
        -->
         <form action = "<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method = "post">
            <div class="login-block">
                <h1>Login &nbsp; <img src=<?php echo "\"".$markUrl ."\"" ?>></h1>

                <input type="text" name="username" placeholder="Username" id="username" autocomplete="off" required/>
                <input type="password" name="password" placeholder="Password" id="password" autocomplete="off" required/>
                <button  type="submit" name = "login">Login</button>
				        <a href="index.php"><div class="cancel-button"></div></a>
            </div>
         </form>
			

   </body>
</html>

<?php
}else{
   //If already logged in just redirect
   if ($_SESSION['username'] == 'btran'){
      header('Refresh: 1; URL = add_movie.php');
   }else if ($_SESSION['username'] == 'guest'){
      header('Refresh: 1; URL = view_movies.php');
   }
}
?>