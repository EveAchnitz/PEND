function ex1(){
    let nomes = ["Jorge","Francisco","Antônio","Mário","Maria"];
    
    for(let nome of nomes){
        console.log(nome);
    }
}//saída: Jorge Francisco Antônio Mário Maria

function ex2(){
    let numeros = [45,55,18];
    let soma = 0;
    
    for(let num of numeros){
        soma += num;
    }
    console.log(soma);
}//saída: 118

function ex3(){
    let pessoa = {
        nome: "Viviane", 
        idade: 93, 
        cidade: "Dublin"
    };
    
    for(let chave in pessoa){
        console.log(chave + ": " + pessoa[chave]);
    }
}//saída:nome: Viviane idade: 93 cidade: Dublin

function ex4(){
    let endereco = {
        rua: "Rua do Ouvidor",
        bairro: "Jardim dos ouvidos",
        numero: 123
    };
    let contador = 0;
    
    for(let propriedade in endereco){
        contador++;
    } console.log(contador);
}//saída: 3

function ex5(){
    let nomes = ["Jorge","Francisco","Antônio","Mário","Maria"];
    let todos = " ";
    
    for(let nome of nomes){
        todos += nome + ", ";
    }
    console.log(todos);
}//saída: Jorge, Francisco, Antônio, Mário, Maria,

function ex6(){
    let misto = [23, false,"aula"];
    
    for(let elemento of misto){
        console.log(typeof elemento);
    }
}//saída: number boolean string

function ex7(){
    let pessoas = [{nome: "João", idade: 45},{nome: "Joana", idade: 23}];
    
    for(let chave in pessoas){
        idade = pessoas[chave].idade + 1;
        console.log(idade);
    }
}//saída: 46 24

function ex8(){
    let pessoa = {nome: "Roberta", idade:68};
    let matrizPessoa = "";
    
    for(let chave in pessoa){
        matrizPessoa += chave + ": " + pessoa[chave] + "; ";
    } console.log(matrizPessoa);
}//saída: nome: Roberta; idade: 68;

    let escolha = parseInt(prompt("MENU: \n 1- Listar nomes \n 2- Somar valores \n 3- Exibir propriedades \n 4- Contar propriedades \n 5- Concatenar nomes \n 6- Imprimir tipos de dados \n 7- Adicionar 1 na idade \n 8- Converter objeto em array \n Qual você escolhe?"));
    
    switch(escolha){
        case 1: ex1(); break;
        case 2: ex2(); break;
        case 3: ex3(); break;
        case 4: ex4(); break;
        case 5: ex5(); break;
        case 6: ex6(); break;
        case 7: ex7(); break;
        case 8: ex8(); break;
        default: console.log("Não há essa opção :(");
    }