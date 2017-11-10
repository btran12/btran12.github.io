<?php
function connect() {
    //Database Configurations
    $dbtype = "mysql";
    $dbhost = "localhost";
    $dbname = "id1442644_baotranxyz";
    $dbuser = "id1442644_admin";
    $dbpass = "tran1340";

    //set up connection
    $db = new mysqli($dbhost,$dbuser,$dbpass,$dbname);

    /* check connection */
    if ($db->connect_errno) {
        printf("Connect failed: %s\n", $db->connect_error);
        exit();
    }

    return $db;
}

function isUsernameValid($username){
    $sql = "SELECT *
            FROM USERS
            WHERE username = '$username'";

    $result = executeSql($sql);

    return $result->num_rows > 0;
}

function getPasswordHash($username) {
    $sql = "SELECT passwordHash
            FROM USERS
            WHERE username = '$username'";

    $result = executeSql($sql);

    if ($result) {
        while ($row = $result->fetch_row()) {
            return $row[0];
        }
        $result->close();
    } else {
        echo "Query failed";
    }
}

function insertUser($name, $username, $email,$hash, $session_id) {
    $sql = "INSERT INTO USERS (name, username, email, passwordHash, session_id)
            VALUES ('$name','$username','$email','$hash',$session_id)";

    executeSql($sql);
}

function deleteUser($username) {
    $sql = "DELETE FROM `USERS`
            WHERE username = '$username'";

    executeSql($sql);
}

function executeSql($sql) {
    $db = connect();

    $result = $db->query($sql);

    $db->close();

    return $result;
}

?>
