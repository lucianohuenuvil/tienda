<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );



    $from = "test@hostinger-tutorials.com";
    $to = $_POST['email'];
    $subject = "Asunto: " . $_POST['asunto'];
    $message = "Nombre: " . $_POST['name'] . "\nNombre del establecimiento: " .  $_POST['establecimiento'] . "\nTeléfono: ". $_POST['number'] . "\nMensaje: ". $_POST['message']; 
    $headers = "From: " . "styloschool@formularios.com";
    mail($to,$subject,$message, $headers);
    echo "The email message was sent.";
?>