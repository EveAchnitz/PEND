let t1 = "text";
let t2 = 5;
let t3 = true;
let t4 = 30n;
let t5;
let t6 = "symbol";
let t7 = null;

console.log(typeof t1);// -> string
console.log(typeof t2);// -> number
console.log(typeof t3);// -> boolean
console.log(typeof t4);// -> bigint
console.log(typeof t5);// -> undefined
console.log(typeof t6);// -> string (não tem um tipo symbol pois é um recurso avançado, que não aprendemos ainda)
console.log(typeof t7);// -> object