'use strict';

const array = [1, 2, 3];
console.log(...array);

Object.setPrototypeOf(array, null);

try {
  console.log(...array);
} catch(e){
  console.error(e.message);
}


