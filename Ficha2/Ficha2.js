// FICHA 2 EXERCICIOS

function IMC(peso, altura) {
    var IMC = peso / ((altura) * (altura));
    if (IMC < 18.5) {
        console.log("Abaixo do peso");
    } else if (IMC < 18.5 || IMC < 25) {
        console.log("No peso normal");
    } else if (IMC < 25 || IMC < 30) {
        console.log("Acima do peso");
    } else if (IMC > 30) {
        console.log("OBESO");
    }
}
// IMC(95, 1)

function reverseStr(str) {
    var splitted = str.split(" ")
    var inverted = "";
    splitted.forEach(item => {
        for (let i = item.length - 1; i >= 0; i--) {
            inverted += item[i]
        }
        inverted += " ";
    });
    console.log(inverted);
}
// reverseStr("Hoje é Domingo");

function vogals(frase) {
    var conta = 0
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == 'a' || frase[i] == 'e' || frase[i] == 'i' || frase[i] == 'o' || frase[i] == 'u') {
            conta = conta + 1
        }
    }
    console.log(conta)
}
// vogals("era uma vez uma tartaruga")

function date(entrada, saida) {
    var startTime = entrada.split(':');
    var endTime = saida.split(':');
    startDate = new Date();
    endDate = new Date();

    startDate.setHours(startTime[0], startTime[1], startTime[2]);
    endDate.setHours(endTime[0], endTime[1], endTime[2]);

    if (startDate.getHours() < 8 || endDate.getHours() > 18) {
        return false
    }
    var difference = new Date();
    difference.setHours(endDate.getHours() - startDate.getHours(), endDate.getMinutes() - startDate.getMinutes(), endDate.getSeconds() - startDate.getSeconds());
    return difference.getHours() + ":" + difference.getMinutes() + ":" + difference.getSeconds()
}
// console.log("Funcionario trabalhou : " + date("10:32:45", "17:28:15"))

// 4. Escreva uma função que dada frase e uma letra do abecedário devolva o número vezes que essa letra ocorra. 
// Não faça distinção entre maiúsculas e minúsculas (toLower()).

function numVezes(frase, vogal) {
    var conta = 0
    var lower = frase.toLowerCase()
    for (let i = 0; i < lower.length; i++) {
        if (lower[i] == vogal) {
            conta = conta + 1;
        }
    }
    console.log(conta);
}
// numVezes("era uma vez uma tartaruga A A A", "a")

function rect(altura, largura) {
    for (let i = 0; i < altura; i++) {
        var desenho = "";
        for (let i = 0; i < largura; i++) {
            desenho = desenho + "*";
        }
        console.log(desenho)
    }
}
// rect(5, 5)

function triangulo(largura) {
    var desenho = " ";
    for (let i = 0; i < largura; i++) {
        desenho = desenho + "*";
        console.log(desenho)
    }
}
// triangulo(5)

function quadrado(lado) {
    for (let i = 0; i < lado; i++) {
        var desenho = "";
        desenho = desenho + "*" + "         " + "*";
        console.log(desenho)
    }
}
// quadrado(5)

// 9. Construa um programa que permita fazer o processamento automático das notas de testes de uma turma (máximo de 30 alunos). 
// Crie um objeto que represente um aluno e as suas propriedades, crie vários alunos e adicione os mesmos a um Array. 
// O programa deve permitir fazer as seguintes opções:  
// a. Lista - O programa imprime todas as notas.  
// c. Melhor nota – O programa imprime o número do melhor aluno e a respetiva nota.  
// d. Pior nota – O programa imprime o número do pior aluno e a respetiva nota.  
// e. Nota média – O programa imprime o número do aluno que tiver a nota mais próxima da média e a respetiva nota. 
// f. Notas Negativas – imprime o número de notas negativas  g. Notas Positivas – imprime o número de notas negativas

var turma = [{
        name: "Artur",
        id: 1,
        nota: 8
    },
    {
        name: "Rodrigo",
        id: 2,
        nota: 13
    },
    {
        name: "Jota",
        id: 2,
        nota: 16
    },
    {
        name: "Antonio",
        id: 4,
        nota: 15
    }, {
        name: "Rui",
        id: 5,
        nota: 18
    }, {
        name: "Luis",
        id: 6,
        nota: 20
    },
    {
        name: "Claudio",
        id: 7,
        nota: 11
    }
]

function listGrade() {
    for (var elem in turma) {
        console.log(turma[elem].name + " " + " teve nota de: " + turma[elem].nota);
    }
}
// listGrade()

function worstGrade() {
    var worstGr = 20;
    var count = 0
    for (let i = 0; i < turma.length; i++) {
        if (worstGr > turma[i].nota) {
            worstGr = turma[i].nota;
            nome_aluno = turma[i].name;
        }
    }
    return "A pior nota foi " + nome_aluno + " com nota de " + worstGr
}
// console.log(worstGrade())

function negativeGrades() {
    for (let i = 0; i < turma.length; i++) {
        if (turma[i].nota < 9.50) {
            console.log("Os alunos que tiveram negativa: " + turma[i].name)
        }
    }
}
// negativeGrades()

function positiveGrades() {
    for (let i = 0; i < turma.length; i++) {
        if (turma[i].nota > 9.50) {
            console.log("Os alunos que tiveram negativa: " + turma[i].name, " com nota de ", +turma[i].nota)
        }
    }
}
// positiveGrades()

function average() {
    var media = 0
    var soma = 0
    var count = 0
    for (let i = 0; i < turma.length; i++) {
        soma = turma[i].nota + soma
        count += 1
        media = soma / count
    }

    return "A média das notas é de: " + media + " e o aluno que está mais perto da nota média é: " //+
}
// console.log(average())

function bestGrade() {
    var bestGr = 0;
    for (let i = 0; i < turma.length; i++) {
        if (bestGr <= turma[i].nota) {
            bestGr = turma[i].nota
            aluno = turma[i].name
        }
    }
    console.log(aluno + " " + bestGr)
}
// bestGrade()

// MelhoresNOTAS.pop(turma[i].nota)
// MelhoresNOTAS.push(turma[i].nota)