


let idadeMinima = true  ;
let tituloEleitos = true;

let podeVotar = idadeMinima && tituloEleitos;   
console.log("Pode votar: " + podeVotar);

let podeViajar = !podeVotar;
console.log("Pode viajar: " + podeViajar);