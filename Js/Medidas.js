const form = document.getElementById("form");

let mensaje = document.getElementById("mensaje");

let validacion = (e) => {
    //quitando el evento por defecto del navegador
    e.preventDefault();
    
    let ancho = document.getElementById("ancho").value;
    let relacion = document.getElementById("relacion").value;
    let rin = document.getElementById("rin").value;
    console.log(ancho, relacion, rin);
    if(ancho>1){
        mensaje.textContent='SE RECOMIENDA CAMBIAR DE MUESTRA';
        console.log("ay");
    }

    //mensaje.textContent='SE RECOMIENDA CAMBIAR DE MUESTRA';
    //mensaje.textContent='LA MUESTRA ES APTA PARA ESTE ENSAYO';
}

form.addEventListener("submit", validacion);