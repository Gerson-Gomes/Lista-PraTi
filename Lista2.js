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

// class carro {
//     constructor(marca, modelo, preco, cor) {
//         this.marca = marca
//         this.modelo = modelo
//         this.preco = preco
//         this.cor = cor
//     }

//     carroDeLuxo(){
//         let valor = null
//         for (const key in carro) {
//             if(key > 100000){
//                 valor = key
//             }
//         }
//         return valor
//     }

// }
// let carro1 = new carro('honda','fit',120000,'preto')
// let carro2 =new carro('bugatti','veyron',1500000,'dourado')
// console.log(carro1.carroDeLuxo())
// console.log(carro2.carroDeLuxo())


// 4. Iterando Sobre Arrays de Objetos
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

// class pessoa {
//     constructor(nome, idade, genero, estadoCivil) {
//         this.nome = nome
//         this.idade = idade
//         this.genero = genero
//         this.estadoCivil = estadoCivil
//     }
// }

// let pessoa1 = new pessoa('Gerson','29','Masculino','Solteiro')
// let pessoa2 = new pessoa('Laura','25','Feminino','Casada')

// let array = [pessoa1,pessoa2]

// for (const element of array) {
//     console.log(element)

// }


// 5. Calculando Valores em Arrays de Objetos
// ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

    // class aluno {
    //     constructor(nome, nota1, nota2, nota3) {
    //         this.nome = nome
    //         this.nota1 = nota1
    //         this.nota2 = nota2
    //         this.nota3 = nota3

    //     }
    //     media() {
    //         let sum = this.nota1 + this.nota2 + this.nota3
    //         let avg = sum / 3
    //         return avg.toFixed(2)
    //     }

    // }

    // let aluno1 = new aluno('Gerson', 7, 7, 8.9)
    // let aluno2 = new aluno('Alzira', 5, 6.5, 9)
    // let aluno3 = new aluno('Roberto', 7, 3, 9.9)
    // let aluno4 = new aluno('Augusto', 5, 7.4, 8.5)
    // let array = [aluno1, aluno2, aluno3, aluno4]
    // for (const element of array) {
    //     console.log(`${element.nome}: ${element.media()}`);
        
        
    // }

//     6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

