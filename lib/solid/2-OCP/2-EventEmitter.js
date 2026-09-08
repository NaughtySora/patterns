'use strict';

const { EventEmitter } = require("node:events");

class A extends EventEmitter {
  constructor() {
    super();
  }

  method() {
    this.emit('method', 'A');
  }

  off(event, callback) {
    super.off(event, callback);
    console.log('event', event, 'removed', this.listenerCount('method'));
  }
}

class BrokenA extends EventEmitter {
  method() {
    this.emit('method', 'BrokenA');
  }

  off(event) {
    console.log('event', event, 'leaked', this.listenerCount('method'));
  }
}

class B {
  a = null;

  constructor(a) {
    this.a = a;
    a.on('method', this.logger);
  }

  logger(name) {
    console.log(`wow, ${name} emitted an event`, Date.now());
  }

  call() {
    this.a.method();
  }

  close() {
    this.a.off('method', this.logger);
  }
}

const a = new A();
const b0 = new B(a);
b0.call();
b0.call();
b0.close();
b0.call();

console.log();

const brokenA = new BrokenA();
const b1 = new B(brokenA);
b1.call();
b1.call();
b1.close();
b1.call();
