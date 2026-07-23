'use strict';

function* range(end, start = 0, step = 1) {
  while (start < end) {
    yield start;
    start += step;
  }
}

Iterator.prototype.forEach.call(range(10, 0, 2), 
console.log.bind(null, "forEach:"));

const aggregate = Iterator.prototype.reduce
  .call(range(10), (acc, current) => acc += current, 0);

console.log({ aggregate });