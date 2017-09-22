<?php
    // Start storing values for the current session across pages.
   session_start();
   // Allow the user to login if the current session is invalid.
   $isValid = isset($_SESSION["valid"]) ? $_SESSION["valid"] : false;
   if (!$isValid){
?>

<html lang = "en">
   <head>
      
      <title>Sign in</title>
      <style>
        form,input{background:#fafafa}h1,input{color:#636363}input,label{font-size:18px}.highlight,label{pointer-events:none}.button,body{-webkit-font-smoothing:antialiased}.button,footer,hgroup{text-align:center}.button:focus,footer a:focus,footer img:focus,input:focus{outline:0}*{box-sizing:border-box}body{font-family:Helvetica;background:#eee}hgroup{margin-top:4em}h1,h3{font-weight:300}h3{color:#4a89dc}form{width:380px;margin:4em auto;padding:3em 2em 2em;border:1px solid #ebebeb;box-shadow:rgba(0,0,0,.14902) 0 1px 1px 0,rgba(0,0,0,.09804) 0 1px 2px 0}.bar,input{display:block;width:100%}.group{position:relative;margin-bottom:45px}input{padding:10px 10px 10px 5px;-webkit-appearance:none;border:none;border-radius:0;border-bottom:1px solid #757575}label{color:#999;font-weight:400;position:absolute;left:5px;top:10px;transition:all .2s ease}input.used~label,input:focus~label{top:-20px;transform:scale(.75);left:-2px;color:#4a89dc}.bar{position:relative}.bar:after,.bar:before{content:'';height:2px;width:0;bottom:1px;position:absolute;background:#4a89dc;transition:all .2s ease}.bar:before{left:50%}.bar:after{right:50%}input:focus~.bar:after,input:focus~.bar:before{width:50%}.highlight{position:absolute;height:60%;width:100px;top:25%;left:0;opacity:.5}input:focus~.highlight{animation:inputHighlighter .3s ease}@keyframes inputHighlighter{from{background:#4a89dc}to{width:0;background:0 0}}.button{position:relative;display:inline-block;padding:12px 24px;margin:.3em 0 1em;width:100%;vertical-align:middle;color:#fff;font-size:16px;line-height:20px;letter-spacing:1px;background:0 0;border:0;border-bottom:2px solid #3160B6;cursor:pointer;transition:all .15s ease}footer a,footer img{transition:all .2s ease}.buttonBlue{background:#4a89dc;text-shadow:1px 1px 0 rgba(39,110,204,.5)}.buttonBlue:hover{background:#357bd8}.ripples{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;background:0 0}.ripplesCircle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0;width:0;height:0;border-radius:50%;background:rgba(255,255,255,.25)}.ripples.is-active .ripplesCircle{animation:ripples .4s ease-in}@keyframes ripples{0%{opacity:0}25%{opacity:1}100%{width:200%;padding-bottom:200%;opacity:0}}footer p{color:#888;font-size:13px;letter-spacing:.4px}footer a{color:#4a89dc;text-decoration:none}footer a:hover{color:#666;text-decoration:underline}footer img{width:80px}footer img:hover{opacity:.83}
      </style>

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

            <form>
              <div class="group">
                <input type="text" name="username" id="username" required>
                <span class="highlight"/>
                <span class="bar"/>
                <label>Email</label>
              </div>
              <div class="group">
                <input type="password" name="password" id="password" required>
                <span class="highlight"/>
                <span class="bar"/>
                <label>Password</label>
              </div>
              <button type="button" class="button buttonBlue">Login
                <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
              </button>
            </form>

            <!-- <div class="login-block">
                <h1>Login &nbsp; <img src=<?php echo "\"".$markUrl ."\"" ?>></h1>

                <input type="text" name="username" placeholder="Username" id="username" autocomplete="off" required/>
                <input type="password" name="password" placeholder="Password" id="password" autocomplete="off" required/>
                <button  type="submit" name = "login">Login</button>
				        <a href="index.php"><div class="cancel-button"></div></a>
            </div> -->
         </form>
			
         <script>
            $(window, document, undefined).ready(function() {

              $('input').blur(function() {
                var $this = $(this);
                if ($this.val())
                  $this.addClass('used');
                else
                  $this.removeClass('used');
              });

              var $ripples = $('.ripples');

              $ripples.on('click.Ripples', function(e) {

                var $this = $(this);
                var $offset = $this.parent().offset();
                var $circle = $this.find('.ripplesCircle');

                var x = e.pageX - $offset.left;
                var y = e.pageY - $offset.top;

                $circle.css({
                  top: y + 'px',
                  left: x + 'px'
                });

                $this.addClass('is-active');

              });

              $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
                $(this).removeClass('is-active');
              });

            });
         </script>
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