'use strict';

function* range(end, start = 0, step = 1) {
  while (start < end) {
    yield start;
    start += step;
  }
}

const gen = range(10);

const arr = [...gen];

console.log(obj);
