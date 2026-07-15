'use strict';

class Queue {
  #head = null;
  #tail = null;

  enqueue(value) {
    const node = { value, next: null };
    if (this.#tail === null) this.#head = node;
    else this.#tail.next = node;
    this.#tail = node;
    return node;
  }

  dequeue() {
    if (this.#head === null) return null;
    const head = this.#head;
    this.#head = head.next;
    head.next = null;
    if (this.#head === null) this.#tail = null;
    return head.value;
  }

  get empty() {
    return this.#head === null;
  }
}

module.exports = { Queue };
