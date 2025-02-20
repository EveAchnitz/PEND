function testeEscopo() {
    var a = 10;
    if (true) {
        let b = 20;
        console.log(a); //aqui será exibido 10, o valor da variável "a"
        console.log(b); //aqui será exibido 20, o valor da variável "b"
    }
    console.log(a); //aqui ainda será exibido 10, pois a variável "a" é var, portanto é exibida dentro e fora do bloco
    console.log(b); //já aqui, não será exibido o valor de "b", pois é a variável "b" é let, portanto não é exibida fora do seu bloco
}
testeEscopo();