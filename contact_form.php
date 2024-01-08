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

    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host       = 'smtp.gmail.com';               // Specify your SMTP server
        $mail->SMTPAuth   = true;                             // Enable SMTP authentication
        $mail->Username   = 'yourmail@gmail.com';      // SMTP username
        $mail->Password   = 'ytth ijcv dibe zzes';                  // SMTP password
        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port       = 587;                              // TCP port to connect to, use 587 for TLS

        // Recipients
        $mail->setFrom($email);
        $mail->addAddress('bogdan.tyb9@gmail.com');

        // Content
        $mail->isHTML(false);  // Set email format to plain text
        $mail->Subject = $topic;
        $mail->Body    = "Ім'я: $name\nЕл.пошта: $email\nНомер телефону: $number\nАдреса: $address\nТема: $topic\nПовідомлення: $message";

        $mail->send();
        echo "<p align=center>Вашого листа надіслано!</p>";
    } catch (Exception $e) {
        echo "<p align=center>Помилка! Спробуйте ще раз.</p>";
        echo 'Помилка при відправленні листа: ', $e->getMessage();
    }
}
?>
