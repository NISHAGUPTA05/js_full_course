let score = "nisha"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false =>0

let isLoggedIn = "nisha"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "nisha" =>true

let someNumber = 100

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


//              Operation            

let value = 8
let negValue = -value
console.log(negValue);
// console.log(stringNumber);

// increment js mdn veri imp topic

// The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment, 
//  depending on where the operator is placed.

// Examples: 1
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

// Examples: 2

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
