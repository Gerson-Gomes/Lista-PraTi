const prompt = require('prompt-sync')()
// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

// const number = Number(prompt('Qual numéro deseja verificar:  '))
// function isEven(number) {
//     return (number % 2 === 0)

// }
// if(isEven(number)){
//     console.log("O numero é par");

// } else{
//     console.log("O numero é impar");

// }



// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

// const number = Number(prompt('Insira sua Idade: '))

// if(number <= 12){
//     console.log('Você é uma criança')
// }

// if(number > 12 && number <= 17){
//     console.log('Você é um adolecente')
// }
// if(number > 17 && number <= 64){
//     console.log('Você é um adulto')
// }
// if(number > 64){
//     console.log('Você é um idoso')
// }


// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

// const grade = Number(prompt('Qual é sua nota:  '))

// if(grade >= 7){
//     console.log('Situação: Aprovado');

// } else if(grade >=4){
//     console.log('Situação: Recuperação');

// }else{
//     console.log('Situaçao: Reprovado');

// }


// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

// let orderPrice = 0
// while (true) {
//     let order = prompt('Você gostaria de uma Coxinha, um Misto ou uma Coca-Cola?:  ')

//     switch (order) {
//         case 'Coxinha':
//             console.log('Aqui está sua Coxinha por 4,00 R$');
//             orderPrice += 4

//             break;

//         case 'Misto' :
//             console.log('Aqui está seu Misto Quente por 3,50 R$');
//             orderPrice += 3.5
//             break;

//         case 'Coca-Cola':
//             console.log('Aqui está sua Coca-Cola gelada por 3,00 R$');
//             orderPrice += 3
//             break;

//         case 'quit': 
//             console.log(`Sua conta deu ${orderPrice.toLocaleString('pt-br', {minimumFractionDigits: 2})} reais. Volte sempre`);
//             return false

//         default:
//             console.log('Pedido invalido')
//             break
//     }

// }


// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

// let weight = prompt('Qual o seu peso (kg)?: ')
// let heigth = prompt('Qual é sua altura (metro)?: ')

// let imc = weight / Math.pow(heigth, 2)

// if (imc >= 40) {
//     console.log('Obesidade Grave')

// } else if (imc >= 30) {
//     console.log('Obesidade');

// } else if (imc >= 25) {
//     console.log('Sobrepeso');

// } else if(imc >= 18.5){
//     console.log('Normal');

// } else{
//     console.log('Peso muito baixo');

// }


// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

// let sideA = Number(prompt('Insira cumprimento do primeiro lado do triangulo: '))
// let sideB = Number(prompt('Insira cumprimento do segundo lado do triangulo: '))
// let sideC = Number(prompt('Insira cumprimento do terceiro lado do triangulo: '))

// function isTriangle(sideA, sideB, sideC) {
//     return (sideA < (sideB + sideC) && sideB < (sideA + sideC) && sideC < (sideA + sideB))
// }

// if (isTriangle(sideA, sideB, sideC)) {
//     if (sideA != sideB && sideB != sideC) {
//         console.log('Triangulo Escaleno');

//     }  else if(sideA === sideB && sideB === sideC ){
//         console.log('Triangulo Equilátero');


//     } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
//         console.log('Triangulo Isóceles');

//     }
// } else{
//     console.log('Não é um triangulo');

// }


// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

// let numberOfApple = prompt('Quantas maçãs deseja comprar?  ')
// function priceOfApple(number){
//     if(number < 12){
//         return number * 0.3
//     } else{
//         return number * 0.25
//     }
// }
// console.log(`O total da sua compra é ${priceOfApple(numberOfApple).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}`);





// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

// let number1 = prompt('Insira primeiro numero')
// let number2 = prompt('Insira segundo numero')

// console.log(`O maior valor foi ${Math.max(number1, number2)}`);




// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

// const timer = ms => new Promise(res => setTimeout(res, ms))

// async function countdown() {
//     for (let i = 10; i >= 1; i--){
//         console.log(i);
//         await timer(1000)
//     }
// }

// countdown()


// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

// let number = prompt('Insira numero: ')
// for(let i = 0; i <= 10; i++){
//     console.log(number);

// }

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.


// let sum = 0
// for (let i = 0; i < 5; i++) {
//     let number = Number(prompt('Insira um numero: '))
//     sum += number
// }
// console.log(sum);


// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

// let number = prompt('Insira numero: ')
// for(let i = 1; i <= 10; i++){
//     console.log(`${number}X${i} = ${number * i}`);

// }


// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.
// let count = 0
// let sum = 0
// while (true) {
//     let number = Number(prompt('Insira numero: '))
//     if (number === 0) {

//         console.log(sum / count);
//         return false

//     } else {
//         sum += number
//         count++

//     }
// }

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

// let factorial = Number(prompt('Insira numero: '))
// let product = 1
// for(let i = 1; i <= factorial; i++){
//     product = product * i

// }
// console.log(product);



// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

    // let fibonacci = [1, 1]

    // for (let i = 0; i < 8; i++){
    //     fibonacci.push(fibonacci[i] + fibonacci [i+1])
    // }
    // console.log(fibonacci);
