'use strict';

const result = [1, 2, 3, 4]
  .map(x => x ** x)
  .map(x => x - (x / 2))
  .filter(x => x > 2)
  .reduce((acc, current) => acc = ((acc += current) % 2), 0);

console.log(result);