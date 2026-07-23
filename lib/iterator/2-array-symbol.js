'use strict';

const symbol = Object.getOwnPropertySymbols(Array.prototype)[0];
const iterator = Array.prototype[symbol];

const arr = [1, 2, 3];
const iterable = iterator.call(arr);
const next = iterable.next;

console.log('i - 1', iterable.next());
console.log('i - 2', iterable.next());
console.log('i - 3', iterable.next());
console.log('i - 4', iterable.next());