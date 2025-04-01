//Lista: Operadores

//01
{let x = 10;
console.log("Exercício 01:");
console.log(x);// -> 10
console.log("");}

//02
{let a = 20;
let b = 5;

console.log("Exercício 02:");
console.log(a + b);// -> 25
console.log(a - b);// -> 15
console.log(a * b);// -> 100
console.log(a / b);// -> 4
console.log(a % b);// -> 0
console.log("");}

//03
{let num = -15;

console.log("Exercício 03:");
console.log(-num);// -> 15
console.log("");}

//04
{let count = 5;

console.log("Exercício 04:");
count++;
console.log(count);// -> 6
count--;
console.log(count);// -> 5
console.log("");}

//05
{let x = 10;

console.log("Exercício 5:");
x+= 5;
console.log(x);// -> 15
x-= 3;
console.log(x);// -> 12
x *= 2;
console.log(x);// -> 24
x /= 4;
console.log(x);// -> 6
x %= 3;
console.log(x);// -> 0
console.log("");}

//06
{let p = true;
let q = false;

console.log("Exercício 06:")
console.log(p && q);// -> false
console.log(p || q);// -> true
console.log(!p);// -> false
console.log(!q);// -> true
console.log("");
}

//07
{console.log("Exercício 07:");

console.log(0 || "Hello");// -> Hello
console.log("" && "World");// -> " "
console.log(null ?? "Default Value");// -> Default Value
console.log(undefined ?? 42);// -> 42
console.log(" ");}

//08
{let resultado = 10 + 5 * 2 > 20 && !false;

console.log("Exercício 08:");
console.log(resultado);// -> false
/*Porque 10 + 5 * 2 é igual a 20 e 20 não é maior que 20, portanto no final ficará 'false && !false'. Sabemos que !false = true, 
logo o resultado de false && true é false, pois se houver um valor falso no operador &&, o resultado será falso como um todo.*/
console.log(" ");
}

//09
{console.log("Exercício 09:");

console.log("5" - 2);// -> 3 (houve a conversão da string 5 para número e depois subtraiu 2, restando 3)
console.log("5" + 2);// -> 52 (houve a conversão do número 2 para string e adicionou o 5, ficando 52)
console.log(true + 1);// -> 2 (houve a conversão de true para o número 1 e somou mais um a ele, ficando 2)
console.log(false + 10);// -> 10 (houve a conversão de false para 0 e somou 10 a ele, ficando 10)
console.log(" ");
}

//10
{console.log("Exercício 10:");

    let x = 5;
    let y = 10;
    let z = (x++ * --y) / 2 + (y % 3);
    console.log(z);/* -> 22.5 pois, x++ permanece 5 (se fosse ++x seria 6) multiplicado por --y que é 9 (10 - 1), encontramos 45,
    que divindo por 2 dá 22.5, somando com o resto da divisão de y (que agora é 9) por 3, que é 0, permanece 22.5.
    RESUMINDO: (5 * 9)/ 2 + 0 = 22.5 */
}