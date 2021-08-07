var assert = require('assert');

function sum(...args) {
  return args.reduce((prev, cur) => prev + cur);
}

assert.equal(sum(1, 2, 3), 6);

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2));
console.log(sum(2, 3));
console.log(sum(1));
