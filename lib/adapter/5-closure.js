'use strict';

const { Queue } = require('./Queue.js');

const adapter = queue => ({
  push(value) {
    queue.enqueue(value);
  },
  shift() {
    return queue.dequeue();
  }
});