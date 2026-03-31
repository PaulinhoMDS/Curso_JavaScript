const primeiro = prompt("Digite um número inteiro:");
const segundo = prompt("Digite outro número inteiro:");

typeof primeiro; // string
typeof segundo; // string

const primeiroNumero = parseInt(primeiro);
const segundoNumero = parseInt(segundo);

const resultado = primeiroNumero + segundoNumero;
console.log("A soma dos números é: " + resultado);  