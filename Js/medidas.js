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
    
    let altura = ancho * (relacion/100);
    let requisito_normativo = map.get(Number(rin));
    let radio_rin = (rin/2)*25.4;
    let radio_llanta = radio_rin + altura;
    
    console.log(altura,requisito_normativo,radio_rin,radio_llanta);

    if(requisito_normativo>radio_llanta){
        mensaje.textContent='SE RECOMIENDA CAMBIAR DE MUESTRA';
        mensaje.style.backgroundColor = "red";

    }else{
        mensaje.textContent='LA MUESTRA ES APTA PARA ESTE ENSAYO';
        mensaje.style.backgroundColor = "green";
    }
}

form.addEventListener("submit", validacion);
