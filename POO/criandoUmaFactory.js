


function criarLivro ( titulo,autor,paginas){
    const book = {
        tituloDoLivro : titulo,
        autorDoLivro : autor,
        quantidadeDePaginas : paginas,
        printLivro : function(){
            console.log("imprimindo");
        }
    }
    return book
}

const livro1 = criarLivro ("Athomic" , "james", 306);
const livro2 = criarLivro ("Think","Napolean",450);

//colocando propriedades em um codigo
livro1.color = "white" 
console.log(livro1)
console.log(livro2)