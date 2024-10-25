<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect POST data from the form
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));
    
    // Email settings
    $to = "egbikspeter@gmail.com"; // Your email address
    $subject = "Contact Form Submission from $name";
    
    $email_message = "
    Name: $name\n
    Email: $email\n
    Message: \n$message\n
    ";
    
    $headers = "From: $email";
    
    // Send email
    if (mail($to, $subject, $email_message, $headers)) {
        echo "Thank you, your message has been sent!";
    } else {
        echo "Sorry, there was an issue sending your message. Please try again later.";
    }
}
?>