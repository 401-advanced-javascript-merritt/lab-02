'use strict';

const List = require('./list-constructor.js');

let stuff = new List();
stuff.push('a');
stuff.push('b');
stuff.push('c');
//let last = stuff.pop();
//stuff.shift();

stuff.unshift('d');

console.log(stuff);
