'use strict';

const { Queue } = require('./Queue.js');

class ArrayQueue extends Queue {
  push(value) {
    this.enqueue(value);
  }

  shift() {
    return this.dequeue();
  }
}
