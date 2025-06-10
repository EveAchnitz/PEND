/*1) Definições básicas
- Erro: é algo que surge quando uma situação não ocorreu como o esperado.
- Exceção: é um tipo de erro que interrompe o fluxo da programação (mas há um try...catch para capturá-la isso não acontece).
- Diferença entre erro em linguagem natural e exceção em javascript: Quando um erro acontece, significa que nossa ação não foi adequada, geralmente aprendemos com ele e seguimos a vida, porém quando há uma exceção, uma situação excepcional é sinalizada e o fluxo da programação é interrompido.

2) Erros sem exceções?
- Quando eu fiz a soma de dois valores, como 1 (do tipo int) e "um"(do tipo string), o resultado foi "1um", sendo que o resultado esperado seria 2, assim, mesmo o resultado estando errado, a programação não interrompida e não gerou uma exceção.

3) Confiabilidade limitada
- Em situações onde precisamos que o valor de entrada do usuário seja especificamente de um tipo para que a programação funcione corretamente, sempre conferindo o tipo desse valor com typeof e obrigando-o a ser do tipo em que é pedido (usando por exemplo o parseInt()).

4) Tipos de erros em Javascript
- ReferenceError: Acontece quando você tenta usar uma variável ou uma função que não foi definida ou inicializada.
- TypeError: Acontece quando você tenta fazer uma operação com um valor que não suporta aquela ação, por exemplo chamar um método para um valor null ou undefined ou uma função que não é uma função.
- SyntaxError: Acontece quando há um erro na sintaxe do código, ou seja, na sua estrutura e sua escrita. */

function ex5(){
    function safeParse(jsonString) {
        try {
        return JSON.parse(jsonString);
    } catch (err) {
        console.log("Ocorreu um erro ao converter JSON:", err.message);
        return null;
    }
    }

    console.log(safeParse('{"nome": "José"}')); // [object Object]
    console.log(safeParse('texto errado')); // Ocorreu um erro ao converter JSON: Unexpected token 'e', "texto errado" is not a valid JSON
}

function ex6(){
    function safeParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (err) {
        if (err instanceof SyntaxError) {
            return null;
        } else {
            throw err;
        }
    }
    }
    
    console.log(safeParse('{"nome": "José"}'));//[object Object]
    console.log(safeParse('texto errado.'));//
}

function ex7(){
    function safeParse(jsonString) {
        try {
        return JSON.parse(jsonString);
    } catch (err) {
        console.log("Ocorreu um erro ao converter JSON:", err.message);
        return null;
    } finally {
        console.log("Parse attempt finished");
    }
    }
    
    console.log(safeParse('{"nome": "José"}'));//Parse attempt finished [object Object]
    console.log(safeParse('texto errado.'));//Ocorreu um erro ao converter JSON: Unexpected token 'e', "texto errado." is not valid JSON Parse attempt finished
}

function ex8(){
    class InvalidAgeError extends Error {}

    function checkAge(age) {
    if (age < 0 || age > 120) {
        throw new InvalidAgeError("Idade fora do intervalo.");
    }
    return "Idade válida";
    }

    console.log(checkAge(30));// "Idade válida"
    console.log(checkAge(-5));// Uncaught Error: Idade fora do intervalo
    console.log(checkAge(200));// Uncaught Error: Idade fora do intervalo
}

function ex9(){
    function soma(a, b) {
        return a + b;
    }
    console.log(soma(2, undefined));//NaN -> porque undefined não é um valor que não suporta uma operação como a soma, além de que 2 e undefined são de tipos diferentes.
}

/*10) Preparação do ambiente de depuração
- O primero passo é abrir o navegador (Chrome, Edge, Firefox), o segundo é pressionar a tecla F12 ou as teclas ctrl + shift + i e navegue até a aba sources ou depurador(no firefox).*/

/*11) Uso do debugger
- Ao inserir o código no console, a execução pausou e foram exibidos no "Scope", dentro da aba "Local" as variáveis x e y, com os seus valores de acordo com teste feito (nesse caso, com o número 5), logo ficou x: 5 e y:10 (5 * 2).*/

//12)
function ex12(){
    function interno(m) {
        return m * 3;
    }

    function externo(n) {
        return interno(n) + 1;
    }

    externo(4);
}
//Se usar o StepOver: Executa a linha atual e para na próxima, sem entrar dentro de chamadas de função (multiplicará por 3 e somará 1).
//Se usar o StepInto: Ao chegar em uma chamada de função, “entra” nela e pausa na primeira linha interna (pausará em return m * 3).
//Se usar o StepOut: Executa o restante da função atual sem parar em suas linhas internas até retornar ao chamador (finaliza e volta para o externo).

//13)
/*-> externo(4)
  -> interno(4)
- A função "externo" chamou a função "interno" que foi executada com o valor 4 e assim a função "externo" resultou no valor 13 (4 * 3 - funcão "interno" chamada pela "externo" que somou mais 1).*/

//14)
//Basta usar a tecla F8 para continuar a execução do código, na aba “Breakpoints”, ao desmarcar o breakpoint ou clicar com o botão direito e escolher “Remove breakpoint”, você apaga todos.
