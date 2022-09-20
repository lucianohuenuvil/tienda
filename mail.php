<?php

{ if ( isset ( $ _ POST [ 'Enviar' ] ) ) {
    if ( ! empty ( $ _ POST [ 'name' ] ) && ! empty ( $ _ POST [ ' asunto ' ] ) && ! empty ( $ _ POST [ ' msg ' ] ) && !
         empty ( $ _ POST [ 'email' ] ) ) {

         $ name $ _POST [ 'name' ] ;
         $ asunto $ _POST [ 'asunto ' ] ;
         $ msg = $ _POST [ 'mensaje' ] ;
         $ email = $ _POST [ 'email' ] ;
         $ header = "From : noreply@example.com " " \ r \ n" ;
         $ header . = "Reply - To : noreply@example.com " " \ r \ n" ;
         $ header . = "X - Mailer : PHP / " . phpversion ( ) ;
         $ mail = mail ( $ email , $ asunto , $ msg , $ header ) ;
         if ( $ mail ) {
              echo " < h4 > ¡ Mail enviado exitosamente ! < / h4 > " ;
         }
    }
}