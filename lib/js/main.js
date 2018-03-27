function send() {    
    var response = grecaptcha.getResponse();
    var recapcha = document.getElementById("recapcha");
    if(response.length == 0){
        recapcha.innerText = "Debes validar que no seas un robot";
        recapcha.stye.display = "block";
    } else {
        recapcha.innerText = "";
        recapcha.style.display = "none";
        if(validarFormulario()){
            SendMail();
        }
    }
}

function sendWhatsapp(){
    window.open("https://api.whatsapp.com/send?phone=56997950129",'_blank');
}

function SendMail(){
    var nombre = document.getElementById("name").value;
    $.ajax({
        type: "POST",
        url: "sendMail.php",
        data: $("#formulario").serialize(), // Adjuntar los campos del formulario enviado.
        success: function(data)
        {
            if(data === "Mensaje enviado" || data === "200"){
                var m = document.getElementById("result");
                m.innerHTML = "";
                m.innerHTML = successTemplate(nombre);
            } else {
                alert(document.getElementById("alert"),"Ocurrio un error al enviar el mensaje, intente mas tarde!");
            }
        }
    });
    return false; 
}

function alertMsg(parent,msg){
    parent.innerText = msg;
    parent.style.display = "block";
}

function truAlert(parent){
    parent.innerText = "";
    parent.style.display = "none";
}

function validarFormulario(){
 
    var txtNombre = document.getElementById('name').value;
    var txtAsunto = document.getElementById('asunto').value;
    var txtCorreo = document.getElementById('mail').value;
    var txtMsg = document.getElementById('msg').value;
    var alert = document.getElementById("alert");

    //Test campo obligatorio
    if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
        alertMsg(alert,'El campo nombre no debe ir vacío');
        return false;
    }

    //Test correo
    if(!(/\S+@\S+\.\S+/.test(txtCorreo))){
        alertMsg(alert,'Debe escribir un correo válido');
        return false;
    }

     //Test edad
     if(txtAsunto == null || txtAsunto.length == 0){
        alertMsg(alert,'Debe ingresar un Asunto');
        return false;
    }

    //Test edad
    if(txtMsg == null || txtMsg.length == 0){
        alertMsg(alert,'Debe ingresar un Mensaje');
        return false;
    }

    truAlert(alert);
    return true;
}


function successMesage(name){
    return `Estimado ${name}, su mensaje fue enviado con éxito, nos podremos en contacto con usted a la brevedad`;
}

function successTemplate(name){
    return `
        <div class="tmp">
            <h4>${successMesage(name)}</h4>
        </div>
    `
};