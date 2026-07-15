'use strict';

class AbstractFactory {
  classOne() {
    return this.getInstance('b');
  }
}

class ConcreteFactory extends AbstractFactory {
  getInstance(b) {
    function Proto() {
      this.b = b;
    }
    Proto.prototype.some = function () {
      return this.a ** this.a;
    }
    const proto = new Proto();
    return Object.assign(proto, { a: 1 });
  }
}