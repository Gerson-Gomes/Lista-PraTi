const prompt = require('prompt-sync')()


// 1. Acessando Propriedades de Objetos
// ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.


// class carro {
//     constructor() {
//         this.marca = null
//         this.modelo = null
//         this.ano = null
//         this.cor = null
      
        
//     }
    // setMarca(data) {
    //     this.marca = data
    // }
    // setCor(data) {
    //     this.cor = data
    // }
    // setAno(data) {
    //     this.ano = data
    // }
    // setModelo(data) {
    //     this.modelo = data
    // }
// }

// let carro1 = new carro()
// carro1.setAno(2017)
// carro1.setCor('Azul')
// carro1.setMarca('Honda')
// carro1.setModelo('Fit')

// let txt = ""
// for (let key in carro1) {
//     txt += carro1[key] + " "

// }
// console.log(txt);


// 2. Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.



// class livro{
//     constructor(){
//         this.titulo = null
//         this.autor = null
//         this.anoPublicacao = null
//         this.genero = null
        
//     }

//     setTitulo(data) {
//         this.titulo = data
//     }
//     setAutor(data) {
//         this.autor = data
//     }
//     setAno(data) {
//         this.anoPublicacao = data
//     }
//     setGenero(data) {
//         this.genero = data
//     }
//     setEditora(data){
//         this.editora = data
//     }
//     checkEditora(){
//         for(let key in this){
//             if(key === "editora"){
//                 console.log(this[key]);
//                 return
//             }
//         }
//         this.editora = null
//         console.log("Editora adicionado");
//     }
// }

// let livro1 = new livro()
// livro1.setTitulo("Jogos de Tronos")
// livro1.setAutor('G.R.R.M')
// livro1.setAno("1995")
// livro1.setGenero("Aventura")
// livro1.setEditora("Moderna")
// livro1.checkEditora()



// 3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.


