<?php
$to = 'peteregbiks@email-address.com';
$subject = 'Hello from XAMPP!';
$message = 'This is a test';
$headers = "From: peteregbiks@email-address.com\r\n";
if (mail($to, $subject, $message, $headers)) {
echo "SUCCESS";
} else {
echo "ERROR";
}