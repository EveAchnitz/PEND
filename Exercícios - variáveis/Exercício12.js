var idade = 25;

if (true) {
    var idade = 30;
    console.log("Dentro do bloco:", idade); //aqui será exibido o valor 30
}

console.log("Fora do bloco:", idade); //aqui será exibido o valor 25

//mudando o let para var, somente o valor 30 permanece, pois variável passa a ser global, adotando o seu novo valor até fora de seu bloco