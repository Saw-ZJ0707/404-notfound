<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "hr";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$introduction = $_POST['introduction'];
$diploma = $_POST['diploma'];
$certificate = $_POST['certificate'];
$video = $_POST['video'];

// Insert data into database
$sql = "INSERT INTO application (name, phone, address, introduction, diploma, certificate, video)
        VALUES ('$name', '$phone', '$address', '$introduction', '$diploma', '$certificate', '$video')";

// Output HTML
echo "<!DOCTYPE html><html><head><title>Checkout</title></head><body style='background:white; color:black; text-align:center; padding-top:100px;'>";

if ($conn->query($sql) === TRUE) {
    echo "<h1>Submission coomplete</h1>";
    echo "<p>Thank you for your applying!</p>";
    echo "<script>setTimeout(function(){ window.location.href = 'index.html'; }, 2000);</script>";
} else {
    echo "<h1>Error</h1>";
    echo "<p>" . $conn->error . "</p>";
}

echo "</body></html>";

$conn->close();
?>