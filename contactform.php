<!DOCTYPE html>
<html>
<head>
	<title>contact form</title>
</head>
<body>


<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $name = $_POST['name'];
    $message = $_POST['Message'];

    // Email details
    $to = 'GreenWorldSQU@gmail.com';
    $subject = 'New Message from Green World Website';
    $body = "Name: $name\n\nMessage: $message";

    // Send email
    if (mail($to, $subject, $body)) {
       print 'Email sent successfully!';
    } else {
        print 'Failed to send email. Please try again.';
    }
}
?>
</body>
</html>








