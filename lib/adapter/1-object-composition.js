'use strict';

const { Queue } = require('./Queue.js');

class ArrayQueue {
  #queue = new Queue();

  push(value) {
    this.#queue.enqueue(value);
  }

  shift() {
    return this.#queue.dequeue();
  }
}
