'use strict';

const { Queue } = require('./Queue.js');

class QueueAdapter {
  #queue;
  constructor(queue) {
    this.#queue = queue;
  }

  push(value) {
    this.#queue.enqueue(value);
  }

  shift() {
    return this.#queue.dequeue();
  }
}
