'use strict';

class Actor {
  #queue = [];
  #action = null;
  #processing = false;

  constructor(action) {
    this.#action = action;
  }

  async send(...args) {
    this.#queue.push(args);
    await this.#process();
  }

  async #process() {
    if (this.#processing) return;
    this.#processing = true;
    const copy = this.#queue.slice(0);
    while (copy.length > 0) await this.#action(copy.shift());
    this.#processing = false;
  }
}
