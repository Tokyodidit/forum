<!DOCTYPE html>
<html>
<head>
    <title>Private Forum</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.html");
    exit;
}
    <h1>Welcome to the Private Forum!</h1>
    
    <!-- Add your forum content here -->
    <div class="post">
        <h3>Post Title</h3>
        <p>This is the content of the post.</p>
    </div>

    <div class="post">
        <h3>Another Post Title</h3>
        <p>This is another post content.</p>
    </div>

    <div class="post">
        <h3>Yet Another Post Title</h3>
        <p>This is the content of another post.</p>
    </div>

    <!-- End of forum content -->

    <a href="logout.php">Logout</a> <!-- Add a logout link to log out the user -->
</body>
</html>
