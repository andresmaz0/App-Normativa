let cont_mensaje = 0;
let si = document.getElementById("op-1");
//Asi se obtiene el contenido del texto
//const titulo = document.getElementsByTagName('h1')[0].textContent;

function positivo(e){
    e.preventDefault();
    console.log("si");
    mensaje(1);
}

function negativo(e){
    e.preventDefault();
    console.log("no");
    mensaje(-1);
}

function mensaje (entrada){
    cont_mensaje+=entrada;
    console.log(cont_mensaje);
}

si.addEventListener("click", positivo);