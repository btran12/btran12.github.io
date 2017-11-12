<?php
session_start();

$_SESSION['reg-name'] = "";
$_SESSION['reg-username'] = "";
$_SESSION['reg-email'] = "";

include "./service/database.php";

if (!empty($_POST)) {
    $_SESSION['reg-name']       = $name     = $_POST['name'];
    $_SESSION['reg-username']   = $username = $_POST['username'];
    $_SESSION['reg-email']      = $email    = $_POST['email'];
    $password   = $_POST['password'];
    $password2  = $_POST['password2'];

    // If username doesn't already exist
    if (!isUsernameValid($username) && ($password == $password2)){
        $hash = password_hash($password, PASSWORD_DEFAULT);

        insertUser($name, $username, $email, $hash, 0);
        $_SESSION['registered'] = true;
        header('Refresh: 0; URL = login.php');

    }else {
        $_SESSION['register_failed'] = "Username is not valid or Passwords do not match!";
    }
}
if (!isset($_SESSION['registered'])) {
?>

<html lang="en">
    <head>
        <title>Sign Up</title>
        <style>
            @import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);
            *:focus {
                outline: none;
            }

            body {
                margin: 0;
                padding: 0;
                background: #DDD;
                font-size: 16px;
                color: #222;
                font-family: 'Roboto', sans-serif;
                font-weight: 300;
            }

            #login-box {
                position: relative;
                margin: 5% auto;
                width: 600px;
                height: 450px;
                background: #FFF;
                border-radius: 2px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
            }

            .left {
                position: absolute;
                top: 0;
                left: 0;
                box-sizing: border-box;
                padding: 40px;
                width: 300px;
                height: 400px;
            }

            h1 {
                margin: 0 0 20px 0;
                font-weight: 300;
                font-size: 28px;
            }

            input[type="text"],
            input[type="email"],
            input[type="password"] {
                display: block;
                box-sizing: border-box;
                margin-bottom: 20px;
                padding: 4px;
                width: 220px;
                height: 32px;
                border: none;
                border-bottom: 1px solid #AAA;
                font-family: 'Roboto', sans-serif;
                font-weight: 400;
                font-size: 15px;
                transition: 0.2s ease;
            }

            input[type="text"]:focus,
            input[type="email"]:focus,
            input[type="password"]:focus {
                border-bottom: 2px solid #CF000F;
                color: black;
                transition: 0.2s ease;
            }

            input[type="submit"] {
                margin-top: 10px;
                width: 120px;
                height: 32px;
                background: #CF000F;
                border: none;
                border-radius: 2px;
                color: #FFF;
                font-family: 'Roboto', sans-serif;
                font-weight: 500;
                text-transform: uppercase;
                transition: 0.1s ease;
                cursor: pointer;
            }

            input[type="submit"]:hover,
            input[type="submit"]:focus {
                opacity: 0.8;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
                transition: 0.1s ease;
            }

            input[type="submit"]:active {
                opacity: 1;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
                transition: 0.1s ease;
            }

            .or {
                position: absolute;
                top: 180px;
                left: 280px;
                width: 40px;
                height: 40px;
                background: #DDD;
                border-radius: 50%;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
                line-height: 40px;
                text-align: center;
            }

            .right {
                position: absolute;
                top: 0;
                right: 0;
                box-sizing: border-box;
                padding: 40px;
                width: 300px;
                height: 450px;
                background: url('https://goo.gl/YbktSj');
                background-size: cover;
                background-position: center;
                border-radius: 0 2px 2px 0;
            }

            .right .loginwith {
                display: block;
                margin-bottom: 40px;
                font-size: 28px;
                color: #FFF;
                text-align: center;
            }

            button.social-signin {
                margin-bottom: 20px;
                width: 220px;
                height: 36px;
                border: none;
                border-radius: 2px;
                color: #FFF;
                font-family: 'Roboto', sans-serif;
                font-weight: 500;
                transition: 0.2s ease;
                cursor: pointer;
            }

            button.social-signin:hover,
            button.social-signin:focus {
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
                transition: 0.2s ease;
            }

            button.social-signin:active {
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
                transition: 0.2s ease;
            }

            button.social-signin.facebook {
                background: #32508E;
            }

            button.social-signin.twitter {
                background: #55ACEE;
            }

            button.social-signin.google {
                background: #DD4B39;
            }
        </style>
    </head>
    <body>
        <form method="POST">
            <div id="login-box">
                <div class="left">
                    <h1>Sign up</h1>

                    <input type="text"      name="name"     value="<?php echo $_SESSION['reg-name']; ?>"    placeholder="Your Name" maxlength="65" autofocus required/>
                    <input type="email"     name="email"    value="<?php echo $_SESSION['reg-email']; ?>"   placeholder="E-mail"     maxlength="65" required/>
                    <input type="text"      name="username" value="<?php echo $_SESSION['reg-username']; ?>"    placeholder="Username" maxlength="12" required/>
                    <input type="password"  name="password" placeholder="Password"  required/>
                    <input type="password"  name="password2" placeholder="Re-enter Password"  required/>

                    <input type="submit" name="signup_submit" value="Sign Up" />
                    <?php
                      if (isset($_SESSION['register_failed'])) {
                        echo "<p style='color:red'>".$_SESSION['register_failed']."</p>";
                        unset($_SESSION['register_failed']);
                      }
                    ?>
                </div>

                <div class="right">
                    <span class="loginwith">Sign in with<br />social network</span>

                    <button class="social-signin facebook">Log in with facebook</button>
                    <button class="social-signin twitter">Log in with Twitter</button>
                    <button class="social-signin google">Log in with Google+</button>
                </div>
                <div class="or">OR</div>
            </div>

        </form>
    </body>
</html>

<?php
} else {
    unset($_SESSION['registered']);
    header('Refresh: 0; URL = login.php');
}
?>
