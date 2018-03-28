<?php 
    header('Access-Control-Allow-Origin: *');

    $nombre = $_POST["name"];
    $correo = $_POST["mail"];
    $asuntoDest = $_POST["asunto"];
    $mensaje = $_POST["msg"];

    $destinatario = "contacto@escriturasenlinea.cl"; 
    //$destinatario = "lvilches21@gmail.com"; 
    $asunto = "Se ha enviado un nueo correo desde su formulario de contacto";

    $cuerpo .= "\n";
    $cuerpo = "Nombre: " . $nombre;
    $cuerpo .= "\n";
    $cuerpo .= "Correo electrónico: " . $correo;
    $cuerpo .= "\n";
    $cuerpo .= "Asunto: " . $asuntoDest;
    $cuerpo .= "\n";
    $cuerpo .= "Mensaje:";
    $cuerpo .= "\n";
    $cuerpo .= "\n";
    $cuerpo .= $mensaje;
    $cuerpo .= "\n";
    $cuerpo .= "\n";
    $cuerpo .= "Mensaje enviado desde su formulario de contacto < escriturasenlinea.cl >";

    $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
    $cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $cabeceras .= 'From: Formulario de contacto < ' . $destinatario . '>' . "\r\n";
    $cabeceras .= 'To: Formulario de contacto < ' . $destinatario . '>' . "\r\n";

    if(mail($destinatario,$asunto,$cuerpo,$headers)){
        echo "200";
    } else {
        echo "500";
    }
?>