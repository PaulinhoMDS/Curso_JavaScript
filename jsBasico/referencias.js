// objeto
let nome = "pen";
let preco = 3;
let variavel = true;
let cor = "red"


let pen = {
    nome:"caneta",
    preco: 3,
    variavel: true,
    cor: "red"
}

console.log(pen);       

// array 

let amigos = ["João", "Maria", "Pedro", "Ana"];
console.log(amigos);
amigos[0] = "Carlos"; // Modificando o primeiro elemento do array
console.log(amigos[0]); // Acessando o primeiro elemento do array

// função string

function vestido(cor){
    console.log("a cor do vestido é " + cor);
}
vestido("azul");

// função com calculo           
function porcentagem(percentual){
    return percentual - (percentual *10 / 100);
}
console.log(porcentagem(20));