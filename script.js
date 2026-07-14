const contador = document.getElementById("contador");
const mensaje = document.getElementById("mensaje");
const invitacion = document.getElementById("invitacion");

const fechaCumple = new Date("2027-07-13T00:00:00");

function actualizar(){

    const ahora = new Date();

    const diferencia = fechaCumple - ahora;

    if(diferencia <= 0){

        contador.innerHTML = "🎂🎉";

        mensaje.innerHTML = "¡¡FELIZ CUMPLEAÑOS ADRIANA!!";

        
        //invitacion.innerHTML = "¡¡FELIZ CUMPLEAÑOS ADRIANA!!";

        return;

    }

    const dias = Math.floor(diferencia / (1000*60*60*24));

    const horas = Math.floor((diferencia % (1000*60*60*24))/(1000*60*60));

    const minutos = Math.floor((diferencia % (1000*60*60))/(1000*60));

    const segundos = Math.floor((diferencia % (1000*60))/1000);

    contador.innerHTML =
    `${dias} días ${horas}h ${minutos}m ${segundos}s`;

}

setInterval(actualizar,1000);

actualizar();