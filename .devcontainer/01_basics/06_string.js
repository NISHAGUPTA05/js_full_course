let name = "nisha"
let repoCount = 50

// console.log(name + repoCount);
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ("free-fire")

// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newString1 = "             nisha             "
console.log(newString1);
console.log(newString1.trim());

const url = "https://web.whatsapp.com/"

console.log(url.replace('.', '-'))
console.log(url.includes('web'));
console.log(url.includes('nisha'));

console.log(gameName.split('.'));







