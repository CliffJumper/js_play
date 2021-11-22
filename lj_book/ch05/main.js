'use strict';

const n = 5;
const s = "5";
console.log(n === s);
console.log(n !== s);
console.log(n === Number(s));
console.log(n !== Number(s));
console.log(n == s);
console.log(n != s);

console.log('Playing with Epsilon');

// This will run forever because 0.1 is an approximation
// let j = 0;
// while(true) {
//  j += 0.1;
//  if(j === 0.3) break;
// }
// console.log(`Stopped at ${j}`);

let j = 0;
while(true) {
    j += 0.1;
    if(Math.abs(j - 0.3) < Number.EPSILON) break;
}
console.log(`Stopped at ${j}`);


// Destructuring
// a normal object
const obj = { b: 2, c: 3, d: 4 };
// object destructuring assignment
const {a, b, c} = obj;
console.log(`a == ${a}`); // undefined: there was no property "a" in obj
console.log(`b == ${b}`);
console.log(`c == ${c}`);


// Spread operator
const arr = [1, 2, 3, 4, 5];
let [x, y, ...rest] = arr;
console.log(`x == ${x}`);
console.log(`y == ${y}`);
console.log(`rest == ${rest}`);