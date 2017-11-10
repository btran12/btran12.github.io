<?php
session_start();

include "./service/database.php";

if (!empty($_POST)) {
    // If username doesn't already exist
    if (!isUsernameValid($_POST['username'])){
        $name = $_POST['name'];
        $username = $_POST['username'];
        $password = $_POST['password'];
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $email = $_POST['email'];

        insertUser($name, $username, $email, $hash, 0);
        $_SESSION['registered'] = true;
        header('Refresh: 0; URL = login.php');

    }else {
        $_SESSION['register_failed'] = "Username already exists";
    }
}

?>

<html lang="en">
    <head>

    </head>
    <body>
        <form method="POST">
            <input type="text"      name="name"     placeholder="Your Name" required/>
            <input type="text"      name="username" placeholder="Username"  required/>
            <input type="password"  name="password" placeholder="Password"  required/>
            <input type="email"     name="email"    placeholder="Email"     required/>
            <button type="submit"   name="register"/>
        </form>
    </body>
</html>

<?php

?>
