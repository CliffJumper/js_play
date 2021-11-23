"use strict";

function sayHello() {
  // this is the body; it started with an opening curly brace...
  console.log("Hello world!");
  console.log("¡Hola mundo!");
  console.log("Hallo wereld!");
  console.log("Привет мир!");
  // ...and ends with a closing curly brace
}

// sayHello();

const g = sayHello;

g();

function f(x) {
  console.log(`inside f: x=${x}`);
  x = 5;
  console.log(`inside f: x=${x} (after assignment)`);
}
let x = 3;
console.log(`before calling f: x=${x}`);
f(x);
console.log(`after calling f: x=${x}`);

function getSentence({ subject, verb, object }) {
  return `${subject} ${verb} ${object}`;
}
const o = {
  subject: "I",
  verb: "love",
  object: "JavaScript",
};
console.log(getSentence(o));

function addPrefix(prefix, ...words) {
  const prefixWords = [];
  for (let i = 0; i < words.length; i++) {
    prefixWords[i] = prefix + words[i];
  }
  return prefixWords;
}

console.log(addPrefix("con", "verse", "vex"));

const exammpleObject = {
    name: 'Gromit',
    speak() { return `My name is ${this.name}`;},
}

console.log(exammpleObject.speak());