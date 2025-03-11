let times = ["Flamengo","Palmeiras","São Paulo"];

times.push("Corinthians");// -> Flamengo,Palmeiras,São Paulo,Corinthians
console.log(times);

times.unshift("Grêmio")// -> Grêmio,Flamengo,Palmeiras,São Paulo,Corinthians
console.log(times);

times.pop()
console.log(times);// -> Grêmio,Flamengo,Palmeiras,São Paulo

console.log(times.indexOf("Palmeiras"));// -> 2

console.log(times.reverse());// -> São Paulo,Palmeiras,Flamengo,Grêmio