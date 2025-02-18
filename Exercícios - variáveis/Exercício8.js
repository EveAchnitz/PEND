//Var: se refere a uma variável que funciona em todo o código, mas em alguns casos pode ser usada localmente.
//Let: se refere a uma variável que funciona somente dentro do bloco em que foi declarada.
//Const: se refere a uma variável que armazena valores imutáveis, é um valor constante.

const anoNasc = 2008;
var nome = "Josefina";

{
    let idade = 17;
    console.log(nome + " tem " + idade + " anos, nasceu em " + anoNasc + ".");//aqui, tudo será exibido normalmente, pois a variável let e a exibição estão ambas dentro do mesmo bloco.
}

const anosNasc = 2007;
console.log(nome + " tem " + idade + " anos, nasceu em " + anoNasc + ".");//aqui dará erro, pois a variável constante é imutável e a variável idade não funciona fora de seu bloco, por ser let.