var nome = "Ana";

function mostrarNome() {
    let nome = "Carlos";
    console.log(nome); //será exibido "Carlos", pois a variável recebeu outro valor dentro de seu bloco, e quando é exibida dentro dele, é esse valor que vale
}

mostrarNome();
console.log(nome); //será exibido "Ana", pois agora estamos fora do bloco onde essa variável recebeu um novo valor
//não há mudanças no console quando alteramos o var dentro da função por let