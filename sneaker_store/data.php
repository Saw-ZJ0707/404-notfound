<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "sneaker_store";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$card_number = $_POST['card_number'];
$expiry_month = $_POST['expiry_month'];
$expiry_year = $_POST['expiry_year'];
$cvv = $_POST['cvv'];

// Insert data into database
$sql = "INSERT INTO payment (name, phone, address, card_number, expiry_month, expiry_year, cvv)
        VALUES ('$name', '$phone', '$address', '$card_number', '$expiry_month', '$expiry_year', '$cvv')";

// Output HTML
echo "<!DOCTYPE html><html><head><title>Checkout</title></head><body style='background:white; color:black; text-align:center; padding-top:100px;'>";

if ($conn->query($sql) === TRUE) {
    echo "<h1>Checkout complete</h1>";
    echo "<p>Thank you for your purchase!</p>";
    echo "<script>setTimeout(function(){ window.location.href = 'index.html'; }, 2000);</script>";
} else {
    echo "<h1>Error</h1>";
    echo "<p>" . $conn->error . "</p>";
}

echo "</body></html>";

$conn->close();
?>