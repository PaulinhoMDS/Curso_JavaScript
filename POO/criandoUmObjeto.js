// criação de um objeto - livro

const book = {
    tituloDoLivro : "athomic habits",
    autorDoLivro : "James",
    qauntidadeDePaginas : 306,
    capitulos : {
        cap1 : "Fundamentals",
        cap2: "1st law"
    },
    // colocando função dentro do objeto
     printLivro : function(){
        console.log("imprimindo");
     }
}
book.printLivro()