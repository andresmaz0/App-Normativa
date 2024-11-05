let cont_si = 0;
let cont_no = 0;
let si = document.getElementById("op-1");
let no = document.getElementById("op-2");

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

    switch (cont_mensaje){
        //No una vez
        case -1:
        titulo[0].textContent = "La llanta tiene simbolo de Velocidad : T, H, V, W, Y, Z :";
        break;

        // Si una vez
        case 1:
        window.location.href = "desicion_2018.html";
        console.log("entre en 1");
        break;
    }
}

si.addEventListener("click", positivo);
no.addEventListener("click", negativo);