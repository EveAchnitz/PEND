let val1 = Boolean(0);
let val2 = Boolean(1);
let val3 = Boolean("");
let val4 = Boolean("Hello");
let val5 = Boolean(null);
let val6 = Boolean(undefined);
let val7 = Boolean({});
let val8 = Boolean([]);

console.log(val1);// -> false
console.log(val2);// -> true
console.log(val3);// -> false
console.log(val4);// -> true
console.log(val5);// -> false
console.log(val6);// -> false
console.log(val7);// -> true
console.log(val8);// -> true