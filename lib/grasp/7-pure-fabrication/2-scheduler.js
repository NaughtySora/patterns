"use strict";

const { randomUUID } = require("node:crypto");

class Scheduler {
  #collection = new Map();

  register(ms, callback, ...args) {
    const key = randomUUID();
    const timer = setTimeout(() => {
      this.#collection.delete(key);
      callback(...args);
    }, ms, ...args);
    this.#collection.set(key, timer);
    return key;
  }

  unregister(key) {
    const timer = this.#collection.get(key);
    if (timer === undefined) return false;
    clearTimeout(timer);
    return this.#collection.delete(key);
  }

  get size() {
    return this.#collection.size;
  }
}

const scheduler = new Scheduler();

scheduler.register(1000, console.log, "boo");
const key = scheduler.register(2000, console.log, "hi :3");
const deleted = scheduler.unregister(key);
console.log("key", key, deleted ? "was" : "wasn't", "deleted");