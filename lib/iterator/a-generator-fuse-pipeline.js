'use strict';

const object = {
  key: 'value',
  boolean: true,
  number: 1337,
  greetings: 'hello',
};

function* values(object) {
  for (const key in object) {
    if (!Reflect.has(object, key)) continue;
    yield object[key];
  }
}

function* enumerate(seq) {
  let i = 0;
  for (const value of seq) {
    yield [value, i++];
  }
}

function* even(seq) {
  for (const value of seq) {
    if((value[1] % 2) !== 0) continue;
    yield value;
  }
}

/**
 * fuse generator composition refers to processing each element in the sequence
 * one by one by all generators
 * 
 * object = {key: 'value', ...};
 * values(object) -> enumerate(object.key) -> even([object.key, 0])
 */
for (const value of even(enumerate(values(object)))) {
  console.log(value);
}