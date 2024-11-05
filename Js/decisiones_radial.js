let cont_mensaje = 0;
let si = document.getElementById("op-1");

//Asi se obtiene el contenido del texto
const titulo = document.getElementsByTagName('h1');

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

    switch (entrada){
        case 1:
        window.location.href = "desicion_2018.html";
        console.log("entre en 1");
        //titulo[0].textContent = 
        break;
    }
}

si.addEventListener("click", positivo);