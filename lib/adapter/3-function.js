'use strict';

const { Queue } = require('./Queue.js');

const queueAdapter = () => {
  const queue = new Queue();
  return {
    shift() {
      return queue.dequeue();
    },
    push(value) {
      queue.enqueue(value);
    },
  };
};