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

// class funcionario {
//     constructor(nome, cargo, salario) {
//         this.nome = nome
//         this.cargo = cargo
//         this.salario = salario
//     }

// }
// function valorDeCorte(array, valor) {
//     for (const element of array) {
//         if(element.salario > valor){
//             console.log(element);

//         }

//     }
// }
// let funcionario1 = new funcionario('Carlos', 'Caixa', 3200)
// let funcionario2 = new funcionario('Maria', 'Desenvolvedora', 5100)
// let funcionario3 = new funcionario('Renata', 'Diretora', 8300)
// let array = [funcionario1, funcionario2, funcionario3]
// valorDeCorte(array,4000)


// 7. Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.


// class produtos {
//     constructor(nome, preco, desconto) {
//         this.nome = nome
//         this.preco = preco
//         this.desconto = desconto

//     }

// }
// let produtos1 = new produtos('Arroz', 10, 0)
// let produtos2 = new produtos('Feijão', 8.50, 0)
// let produtos3 = new produtos('Macarrão', 5.40, 0)
// let array = [produtos1, produtos2, produtos3]

// array.forEach(element => {
//     element.desconto = 10
//     element.precoReal = element.preco * (1 - (element.desconto / 100))
//     console.log(`${element.nome}: R$${element.precoReal.toFixed(2)}`);


// })



// 8. Criando Novos Arrays a Partir de Objetos
// ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

// class filmes {
//     constructor(titulo, diretor, anoLancamento) {
//         this.titulo = titulo
//         this.diretor = diretor
//         this.anoLancamento = anoLancamento
//     }
// }

// let filme1 = new filmes('Resident Evil', 'Scorcese', '1995')
// let filme2 = new filmes('Spider-man', 'Bay', '1990')
// let array = [filme1, filme2]
// let arrayTitulo = []
// array.forEach(element => {

//     arrayTitulo.push(element.titulo)
// });
// console.log(arrayTitulo);



// 9. Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

// class cliente {
//     constructor(nome, idade, cidade) {
//         this.nome = nome
//         this.idade = idade
//         this.cidade = cidade
//     }
// }
// let cliente1 = new cliente('Marcos', 25, 'Salvador')
// let cliente2 = new cliente('Plinio',35,'Salvador')
// let cliente3 = new cliente('Gerson',60,'Feira de Santana')
// let array = [cliente1,cliente2,cliente3]
// let count = 0
// array.forEach(element => {
//     if(element.idade > 30){
//         count++
//     }


// });
// console.log(count);

// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

// class vendas {
//     constructor(produto, quantidade, valor) {
//         this.produto = produto
//         this.quantidade = quantidade
//         this.valor = valor
//     }

// }

// let vendas1 = new vendas('Arroz', 8, 5.00)
// let vendas2 = new vendas('Feijão', 10, 4.50)
// let vendas3 = new vendas('Macarrão', 15, 4.00)
// let vendas4 = new vendas('Farinha', 20, 3.00)
// let array = [vendas1, vendas2, vendas3, vendas4]
// let valorTotal = 0
// array.forEach(element => {
//     valorTotal = element.quantidade * element.valor + valorTotal
// });
// console.log(valorTotal);



// 11. Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.


// class pedidos {
//     constructor(cliente, produto, quantidade) {
//         this.cliente = cliente
//         this.produto = produto
//         this.quantidade = quantidade


//     }
// }

// let pedido1 = new pedidos('Augusto', 'Agua', 5)
// let pedido2 = new pedidos('Augusto', 'Cebola', 10)
// let pedido3 = new pedidos('Maria', 'Agua', 500)
// const array = [pedido1, pedido2, pedido3]
// const totalPorCliente ={}
// array.forEach(element => {
//     const {cliente,quantidade} = element
//     if(totalPorCliente[cliente]){
//         totalPorCliente[cliente] +=quantidade
//     } else{
//        totalPorCliente[cliente] = quantidade
//     }
// });
// console.log(totalPorCliente);



// 12. Atualizando um Array de Objetos
// ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

// class estoque {
//     constructor(produto, quantidade, minimo) {
//         this.produto = produto
//         this.quantidade = quantidade
//         this.minimo = minimo
//     }

// }

// let estoque1 = new estoque('Arroz', 10, 5)
// let estoque2 = new estoque('Macarrão', 10, 15)
// let estoque3 = new estoque('Feijão', 11, 20)
// let estoque4 = new estoque('Suco', 20, 5)
// let array = [estoque1, estoque2, estoque3, estoque4]
// array.forEach(element => {
//     if (element.quantidade < element.minimo) {
//         element.quantidade = element.quantidade * 2
//     }
//     console.log(element);

// });

// 13. Implementando um Carrinho de Compras
// ○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

// class carrinhoDeCompra {
//     constructor() {
//         this.itens = []
//     }
// }
// class produto {
//     constructor(nome, quantidade, precoUnitario) {
//         this.nome = nome
//         this.quantidade = quantidade
//         this.precoUnitario = precoUnitario
//     }
// }

// let shopcart = new carrinhoDeCompra()
// let item1 = new produto('Arroz', 5, 5.80)
// let item2 = new produto('Macarrão', 20, 4.20)
// let item3 = new produto('Agua', 10, 3.15)
// shopcart.itens.push(item1, item2, item3)
// let valorTotal = null
// shopcart.itens.forEach(element => {
//     valorTotal += element.quantidade * element.precoUnitario


// });
// console.log(Number(valorTotal).toFixed(2));


// 14. Manipulando Objetos Complexos
// ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

// class empresa {
//     constructor() {
//         this.departamentos = []
//     }
// }
// class departamanto {
//     constructor(nome) {
//         this.nome = nome
//         this.listaFuncionario = []
//     }

// }
// let empresa1 = new empresa()
// let financeiro = new departamanto('Financeiro')
// let ti = new departamanto('T.I')
// empresa1.departamentos.push(financeiro, ti)
// financeiro.listaFuncionario.push('Gerson', 'Maria', 'Carlos')
// ti.listaFuncionario.push('Roberta', 'Fernanda', 'Ruth')
// console.log(empresa1.departamentos);


// for (const chave in empresa1.departamentos) {
//     console.log(chave);
// }