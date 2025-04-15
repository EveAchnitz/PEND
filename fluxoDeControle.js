function ex1(){
    let num = prompt("Digite um número: ");

    if(num > 0){
        console.log(num + " é positivo.");
    } else if(num < 0){
        console.log(num + " é negativo.")
    } else{
        console.log(num + " é igual a zero.");
    }
}

function ex2(){
    let num = 3;

    if(num % 2 == 0){
        console.log(num + " é par.");
    } else{
        console.log(num + " é ímpar.")
    }
}

function ex3(){
    let periodo = "T";

    if(periodo == "M"){
        console.log("Bom dia!");
    } 
    else if(periodo == "T"){
        console.log("Boa tarde!");
    }
    else if(periodo == "N"){
        console.log("Boa noite!");
    }
    else{
        console.log("Letra inválida.")
    }
}

function ex4(){
    let num1 = prompt("Digite um número: ");
    let num2 = prompt("Digite mais um número: ");

    if(num1 > num2){
        console.log(num1 + " é maior que "+ num2);
    }
    else if(num1 < num2){
        console.log(num2 + " é maior que "+ num1);
    }
    else{
        console.log("Os valores são iguais.");
    }
}

function ex5(){
    let num = -5;
    console.log(num > 0 ? "Positivo":"Negativo");
} 

function ex6(){
    let escolha = parseInt(prompt("1 - Início; \n 2 - Sobre; \n 3 - Sair; \n Para onde deseja ir?"));

    switch(escolha){
        case 1: console.log("Bem vindo(a)");
        break;
        case 2: console.log("Saiba mais sobre nós!");
        break;
        case 3: console.log("Tchauu");
        break;
        default: console.log("Valor inválido.");
    }
}

function ex7(){
    let i = 0;
    
    while(i < 5){
        i++;
        console.log(i);
    } 
}

function ex8(){
    let i = 6;

    do{
        i--; 
        console.log(i);
    } while(i > 1);
} 

function ex9(){
    let i = 0;
    for(i = 1; i < 11; i++){
        console.log(i);
    }
}

function ex10(){
    let i = 0;
    let soma = 0;

    for(i = 1;i < 11; i++){
        soma = soma + i;
    } console.log(soma);
}

function ex11(){
    let numeros = [1,2,3,4,5];
    let i = 0;

    for(i = 0; i < numeros.length; i++){
        console.log(numeros[i]);
    }
}

function ex12(){
    let nomes = ["Ana","Maria","Joana","José"];

    for(const nome of nomes){
        console.log(nome);
    }
}

function ex13(){
    let pessoa = {
        nome: "Joana",
        idade: 22,
        cidade: "São Paulo"
    };

    for(const propriedade in pessoa){
        console.log(propriedade);
    }
}

function ex14(){
    for (let i = 0; i < 10; i++) {
        if (i == 5) {
         break;
        }
        console.log(i);
    }
}

function ex15(){
    for (let i = 0; i < 10; i++) {
        if (i == 7) {
         continue;
        }
        console.log(i);
    }
}

function ex16(){
    let nota = parseFloat(prompt("Qual foi a sua nota?"));

    if(nota < 6 && nota >= 0){
        console.log("Reprovado.");
    }
    else if(nota >= 6 && nota <= 7.9){
        console.log("Recuperação");
    }
    else if(nota >= 8 && nota <= 10){
        console.log("Aprovado.")
    }
    else{
        console.log("Não é possível avaliar essa nota.")
    }
}

function ex17(){
    let num = parseInt(prompt("Digite um número: "));
    let i = 0;
    let resultado = 0;
    
    for(i = 1; i < 11; i++){
        resultado = num * i;
        console.log(num + " x " + i + " = "+ resultado);
    }
}

function ex18(){
    let a = [1,"Maria",true,5];
    
    for(const elemento of a){
        if(typeof(elemento) == "number"){
            console.log(elemento);
        }
    }
}

let escolha = parseInt(prompt("1 - Verificar se é positivo; \n 2 - Verificar se é par; \n 3 - Boas vindas; \n 4 - Maior número; \n 5 - Op Ternário; \n 6 - Menu; \n 7 - Contar 1 a 5; \n 8 - Contagem regressiva; \n 9 - Contar 1 a 10; \n 10 - Somar 1 a 10; \n 11 - Exibir array; \n 12 - For...of; \n 13 - For...in; \n 14 - Break; \n 15 - Pular número; \n 16 - Notas; \n 17 - Tabuada; \n 18 - Matriz (number); \n Para onde deseja ir?"));

    switch(escolha){
        case 1: ex1();
        break;
        case 2: ex2();
        break;
        case 3: ex3();
        break;
        case 4: ex4();
        break;
        case 5: ex5();
        break;
        case 6: ex6();
        break;
        case 7: ex7();
        break;
        case 8: ex8();
        break;
        case 9: ex9();
        break;
        case 10: ex10();
        break;
        case 11: ex11();
        break;
        case 12: ex12();
        break;
        case 13: ex13();
        break;
        case 14: ex14();
        break;
        case 15: ex15();
        break;
        case 16: ex16();
        break;
        case 17: ex17();
        break;
        case 18: ex18();
        break;
        default: console.log("Valor inválido.");
    }