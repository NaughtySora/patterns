'use strict';

class SLL {
  #head = null;
  #tail = null;

  push(value) {
    const node = { value, next: null };
    if (this.#tail === null) this.#head = node;
    else this.#tail.next = node;
    this.#tail = node;
  }

  pop() {
    if (this.#head === null) return null;
    const head = this.#head;
    if (head.next === null) {
      this.#tail = this.#head = null;
      return head;
    }
    let node = head;
    const tail = this.#tail;
    while (node.next !== tail) node = node.next;
    this.#tail = node;
    node.next = null;
    return tail;
  }

  [Symbol.iterator]() {
    let slow = this.#head;
    return {
      next() {
        if (slow === null) return { done: true };
        const data = { value: slow.value, done: false, };
        slow = slow.next;
        return data;
      }
    }
  }
}

const list = new SLL();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

console.log(...list);

const exponent = Iterator.prototype.map.call(list[Symbol.iterator](), x => x**x);

console.log([...exponent]);

