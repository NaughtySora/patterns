'use strict';

const stream = require('node:stream');

void async function () {
  const data = [1, 2, 3, 4];
  const result = data
    .map(v => v ** v)
    .filter(v => (v % 2) === 0);
  console.log('1 - array', result);
}();

void async function () {
  const polynomial = await Promise.resolve(25)
    .then(v => v * v)
    .then(v => v - 10)
    .then(v => v + 2 * v);
  console.log('2 - polynomial: ', polynomial);
}();

void function () {
  const readable = stream.Readable.from([1, 2, 3, 4]);
  const transform = stream.Transform.from(async function* (src) {
    for await (const chunk of src) yield (chunk * 2).toString();
  });
  const writable = new stream.Writable({
    construct(callback) {
      this._store = [];
      callback();
    },
    write(chunk, encoding, next) {
      this._store.push(parseInt(chunk, 10));
      next();
    },
  });

  stream.pipeline(
    readable,
    transform,
    writable,
    (err) => {
      if (err) console.error('2 - pipeline error', err);
      else console.log('3 - pipeline', writable._store);
    },
  );
}();

