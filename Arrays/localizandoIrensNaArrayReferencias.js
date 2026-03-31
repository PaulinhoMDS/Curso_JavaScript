const filmes = [
    { id: 1 , nomeDoFilme: "Carros" },
    { id: 2 , nomeDoFilme: "Carros 2"},
    { id: 3 , nomeDoFilme: "Carros 3"}
    
]
//procurando com uma função com um função
//console.log(filmes.find(function(filme){
 //return filme.nomeDoFilme == "Carros"   
//}))

// método arrow Function
console.log(filmes.find(filme => filme.nomeDoFilme == "Carros"))
