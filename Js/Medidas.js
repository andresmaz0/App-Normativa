const form = document.getElementById("form");

let mensaje = document.getElementById("mensaje");

let validacion = () => {
    let ancho = document.getElementById("ancho").value;
    let relacion = document.getElementById("relacion").value;
    let rin = document.getElementById("rin").value;

    mensaje.value='SE RECOMIENDA CAMBIAR DE MUESTRA';
    mensaje.value='LA MUESTRA ES APTA PARA ESTE ENSAYO'
}

form.addEventListener("submit", )