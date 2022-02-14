<?php

if (!isset($_POST['submit'] )) {
    echo 'ERROR, necesitas enviar el formulario!';
}

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$email_subject = $_POST['email-subject'];
$message = $_POST['message'];

$email_from = 'lucianof603@gmail.com';
$email_body = 'Nuevo mensaje de "$name". \n' .
        'Email: $visitor_email \n' . 
        'Mensaje:\n $message' . 

$to = 'lucianof603@gmail.com';
$headers = 'De: $email_from \r \n';

mail($to, $email_subject, $email_body, $headers);

header("Location: https://lucianoflores98.github.io/Portfolio/");
exit;
?>