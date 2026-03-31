function FincanciamentoVeiculo (valor, porcentagemAnual, anos){
    return valor * porcentagemAnual / 100 *anos
}

console.log(FincanciamentoVeiculo(20000, 2.5 ,5))