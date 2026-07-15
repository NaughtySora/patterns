'use strict';

class ReverseArray extends Array {
  [Symbol.iterator]() {
    let i = this.length - 1;
    return {
      next: () => {
        if (i < 0) return ReverseArray.#DONE;
        return { value: this[i--], done: false };
      }
    }
  }
  static #DONE = Object.freeze({ value: undefined, done: true });
}

const double = (...args) => args.map(i => i ** i);

// contract
const array0 = [1, 2, 3, 4];
const res0 = double(...array0);
console.log(res0);

// reversed using array adapter
const array1 = [4, 3, 2, 1];
Object.setPrototypeOf(array1, ReverseArray.prototype);
const res1 = double(...array1);
console.log(res1);
