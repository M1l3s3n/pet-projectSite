<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $address = $_POST['address'];
    $topic = $_POST['topic'];
    $message = $_POST['message'];

    $to = "bogdan.tyb9@gmail.com";
    $date = date('d M Y, H:i:s');
    $str = $date . "\nПише " . $name . " Його email " . $email . "\n" . $message;
    $m = @mail($to, $topic, $str, "From: MySite");

    if (!$m) {
        exit("<p align=center>Помилка! Спробуйте ще раз<br><br><button onclick='history.go(-1)'>НАЗАД</button>");
    } else {
        exit("<p align=center>Вашого листа надіслано!<br><br><button onclick='history.go(-1)'>НАЗАД</button>");
    }
}
?>