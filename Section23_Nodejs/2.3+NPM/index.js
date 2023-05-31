// var generateName = require('sillyname');
import generateName from "sillyName";
import superheroes from "superheroes";
var sillyName = generateName();

console.log(`My name is ${sillyName}`);

console.log(`My name is ${superheroes.random()}`);