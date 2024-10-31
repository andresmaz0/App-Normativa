const form = document.getElementById("form");
let mensaje = document.getElementById("mensaje");

let datos_rin = [24,394,22,368,21,356,20,345,19,330,18,318,17,305,16,292,15,279,14,267,13,254,12,241,11,229,10,216];
let map = new Map();

for(let i=0;i<=datos_rin.length-1;i+=2){
    map.set(datos_rin[i],datos_rin[i+1]);
}
console.log(map);


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