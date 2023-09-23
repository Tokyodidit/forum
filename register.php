<?php
function isUsernameTaken($username) {
    // Retrieve existing usernames
    $userRecords = file("users.txt", FILE_IGNORE_NEW_LINES);
    foreach ($userRecords as $userRecord) {
        [$existingUsername, ] = explode(",", $userRecord);
        if (trim($existingUsername) === trim($username)) {
            return true;
        }
    }
    return false;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $username = $_POST["username"];
    $password = $_POST["password"];
    $confirmPassword = $_POST["confirm_password"];

    // Check if the username already exists
    if (isUsernameTaken($username)) {
        // Handle the case when the username is already taken
        echo "Username is already taken. Please choose a different username.";
        exit;
    }

    // Check if the password and confirm password match
    if ($password !== $confirmPassword) {
        // Handle the case when the passwords do not match
        echo "Passwords do not match. Please enter the same password in both fields.";
        exit;
    }

    // Validation and registration process continue here

    // Append user information to the file or save to the database
    $userRecord = $username . "," . $password . "\n";
    file_put_contents("users.txt", $userRecord, FILE_APPEND);

    // Display success message with black background
    echo '<div style="background-color: black; color: white; padding: 10px;">Registration successful! REDIRECTING</div>';

    // Redirect to login page after a short delay
    header("refresh:3; url=login.html");
}
?>
