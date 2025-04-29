function helloWorld(){
    function sayHello(){
        console.log("Hello World!");
    }
    sayHello();
}//saída: Hello World!

function somaSimples(){
    function sum(a,b){
        soma = a + b;
        return soma;
    }
    sum(5,7);
    console.log(soma);
}//saída: 12

function variavelLocal(){
    function localExample(){
        let message = "Variável local";
        console.log(message);
    }
    console.log(message);
}//saída: Uncaught ReferenceError: message is not defined

function saudacaoPorNome(){
    function greet(name){
        console.log("Hello ", name, "!");
    }
    greet("Tuanny");
} 

function areaCirculo(){
    function calculateArea(radius){
        let area = Math.PI * radius * radius;
        return area;
    }
    console.log(calculateArea(2));
}

function dataAtual(){
    function currentDate(){
        let today = new Date();
        console.log(today);
    }
    currentDate();
}

function shadowingBasico(){
    var x = 10;
    
    function shadowExample(x){
        console.log(x);
    }
    shadowExample(20);
    console.log(x);
}

function primosSimples(){
    function isPrime(n){
    if(n < 2){//0 e 1 não são primos
    let primo = false;
  } else{
    for(let i = 2; i <= n ~/ 2; i++){
      if(n % i == 0){
        primo = false;
        break;//sai do bloco for
      }//hipóteses de um número não ser primo
    }
  }

  if(primo){//primo tem um valor true
    print("$num é um número primo.");
  } else {
    print("$num não é um número primo.");
  }
}
    }
}