<?php
session_start();

function isUserValid($username, $password) {
    $userRecords = file("users.txt", );
    foreach ($userRecords as $userRecord) {
        [$existingUsername,$existingPassword] = explode(",", $userRecord);
        if (trim($existingUsername) === trim($username) && trim($existingPassword) === trim($password)) {
            return true;
        }
    }
    return false;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    if (isUserValid($username, $password)) {
        // User credentials are valid, redirect to homepage
        $_SESSION["username"] = $username;
        header("Location: homepage.html");
        exit();
    } else {
        // Invalid credentials, display error message
        echo '<div style="background-color: white; color: black; padding: 10px;">Invalid username or password. Please try again.</div>';
    }
}
?>
