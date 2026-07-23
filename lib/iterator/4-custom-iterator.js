'use strict';

const obj = {
  text: 'abc',
  [Symbol.iterator]() {
    let i = 0;
    const length = this.text.length;
    return {
      next: () => {
        if (i >= length) return { value: undefined, done: true };
        return { value: this.text[i++], done: false };
      },
    };
  },
};

for (const char of obj) console.log({ char });

const arr = [...obj];
console.log('arr:', arr);
