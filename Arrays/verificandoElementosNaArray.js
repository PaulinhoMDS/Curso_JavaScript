const temperatura = [20,25,37,23,15]

const temperaturaPassou = temperatura.every(valor => valor >= 10)  //retorna true or false atraves de uma comparação. se um  numero for menor do que a condição retorna false
console.log(temperaturaPassou)

const temperaturaAlta = temperatura.filter(valor => valor >= 20)
console.log(temperaturaAlta)