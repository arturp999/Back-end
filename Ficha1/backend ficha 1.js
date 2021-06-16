// function media(np,nt) {
//     media = (np + nt) / 2;
//     if (media >= 9.5) {
//         return "Aprovado";
//     }
//     else {
//         return "tenta outra vez";
//     }
// }

// console.log(media(9.4,9.5))

// function Mes(a) {
//     var Meses = { 1:"Janeiro", 2:"Fevereiro", 3:"Março", 4:"Abril", 5:"Maio", 6:"Junho",7:"Julho",8:"Agosto",9:"Setembro",10:"Outubro",11:"Novembro",12:"Dezembro"}
//     return (Meses[a])
// }
// console.log(Mes(1))

// function MonthByName(monthNumber) {
//     switch (monthNumber) {
//         case 1:
//             console.log("January");
//             break;
//          case 2:
//           console.log("Febr");
//              break;
//          default:
//             console.log("esse mes nao existe");
//             break;
// } }
// MonthByName(1);

// function calculos(x,y) {
//     soma = x + y
//     multiplicacao = x * y
//     divisao = x / y
//     subtracao = x - y
//     return ( "o valor da soma: " + soma + " multiplicação: " + multiplicacao + " divisão: " + divisao + " subtração: " + subtracao)
// }
// console.log(calculos(10,5))

// function calc( op1, op2, operador){
//     if(operador == '+') {
//         console.log(op1+op2);
//     }
//     else if (operador == '-' ) {
//         console.log(op1 - op2);
//     }
//     else if (operador == '*' ) {
//         console.log(op1 * op2);
//     }
//     else if (operador == '/' ) {
//         console.log(op1 /op2);
//     }
// }
// calc(2,2,'-');

// function multilesOfFive(value) {
//     for (let i = 1; i <= 10; i++) {
//         if (i % 5 == 0) {
//             console.log(i, "é multiplo")
//         }
//     }
// }
// multilesOfFive(20);

// function multilesOfFive(value) {
//     for (let i = 1; i <= value; i++) {
//         if (i % 5 == 0) {
//             console.log(i)
//         }
//     }
// }
// multilesOfFive(20);

// function sumOfUntil(value) {
//     var soma = 0;
//     for (let i = 20; i <= value; i++) {
//         soma = soma + i;
//         console.log(soma);
//     }
// }
// sumOfUntil(100);

// function calculateFact(value) {
//     var fact = 1
//     for (let i = value; i >= 1; i--) {
//         fact = fact * i;
//     }
//     console.log(fact);
//     return fact
// }
// var f = calculateFact(3);
// console.log("f: " + f);

// // Criação de arrays
// var array = [1, 2, 3, 4, 5];
// // indexação do valor
// console.log(array[0]);
// // alteração
// array[0] = 500;
// console.log(array[1]);

// var array = [1, 6, 3, 3, 5];
// function calculateAverage(array) {
//     var sum = 0;
//     var average = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum = sum + array[i];
//     }
//     average = sum / array.length;
//     return average;
// }
// var avg = calculateAverage(array);
// console.log("Media: " + avg);

// var array = [1, 6, 3, 3, 5];

// function getMax(array) {
//     var max = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }
//     return max
// }
// var max = getMax(array)
// console.log("Max: " + max);

var array = [0, 1, 6, 3, 3, 5];

function getMIN(array) {
    var min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min
}
var min = getMIN(array)
console.log("MIN: " + min);