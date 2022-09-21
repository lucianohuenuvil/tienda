<?php
     ini_set ( 'mostrar_errores' , 1 ) ;  
     informe_error ( E_ALL ) ;
     $desde = "prueba@hostinger-tutoriales.com" ;
     $a = "lucianobvx@gmail.com" ;
     $asunto = "Comprobando el correo PHP" ;
     $mensaje = "El correo PHP funciona bien" ;
     $encabezados = "De:" . $desde;
     if ( correo ( $a,$asunto,$mensaje, $encabezados )) { 
     echo "El mensaje de correo electrónico fue enviado". ;
     } más {  
     echo "El mensaje de correo electrónico no fue enviado". ;
     }
?>