'use strict';

const symbol = Object.getOwnPropertySymbols(Array.prototype)[0];
const iterator = Array.prototype[symbol];

const arrayLike = { length: 3, 0: 67, 1: 1337, 2: 69 };
const iterable = iterator.call(arrayLike);

console.log('i - 1', iterable.next());
console.log('i - 2', iterable.next());
console.log('i - 3', iterable.next());
console.log('i - 4', iterable.next());