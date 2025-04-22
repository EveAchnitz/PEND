function ex1(){
    let nomes = ["Jorge","Francisco","Antônio","Mário","Maria"];
    
    for(let nome of nomes){
        console.log(nome);
    }
}

function ex2(){
    let numeros = [45,55,18];
    let soma = 0;
    
    for(let num of numeros){
        soma += num;
    }
    console.log(soma);
}

function ex3(){
    let pessoa = {
        nome: "Viviane", 
        idade: 93, 
        cidade: "Dublin"
    };
    
    for(let chave in pessoa){
        console.log(chave + ": " + pessoa[chave]);
    }
}

function ex4(){
    let endereco = {
        rua: "Rua do Ouvidor",
        bairro: "Jardim dos ouvidos",
        numero: 123
    }
    let contador = 0;
    
    for(let propriedade in endereco){
        contador++;
    } console.log(contador);
}

function ex5(){
    let nomes = ["Jorge","Francisco","Antônio","Mário","Maria"];
    let todos = " ";
    
    for(let nome of nomes){
        todos += nome + ", ";
    }
    console.log(todos);
}

function ex6(){
    let misto = [23, false,"aula"];
    
    for(let elemento of misto){
        console.log(typeof elemento);
    }
}