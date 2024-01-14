<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $address = $_POST['address'];
    $topic = $_POST['topic'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();                            
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;  
        $mail->Username   = 'bogdan.tyb9@gmail.com';
        $mail->Password   = 'ytth ijcv dibe zzes';
        $mail->SMTPSecure = 'tls';                            
        $mail->Port       = 587;

        // Recipients
        $mail->setFrom($email);
        $mail->addAddress('bogdan.tyb9@gmail.com');

        // Content
        $mail->isHTML(false);
        $mail->CharSet = 'UTF-8';
        $mail->Subject = $topic;
        $mail->Body    = "Ім'я: $name\nЕл.пошта: $email\nНомер телефону: $number\nАдреса: $address\nТема: $topic\nПовідомлення: $message";

        $mail->send();
        header("Location: /alerts/success.html");
        exit;
    } catch (Exception $e) {
        header("Location: /alerts/error.html");
        exit;
    }
}
?>
