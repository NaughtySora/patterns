'use strict';

class Num {
  static is(value) {
    return typeof value === "number";
  }
}

class Str {
  static is(value) {
    return typeof value === "string";
  }
}

class Bool {
  static is(value) {
    return typeof value === "boolean";
  }
}

class Big {
  static is(value) {
    return typeof value === "bigint";
  }
}

class Fallback { }

class Sum {
  #types = null;

  constructor(...types) {
    this.#types = types;
  }

  is(entity) {
    for (const type of this.#types) {
      if (type.is(entity)) return type;
    }
    return Fallback;
  }
}

const sum = new Sum(Num, Str, Bool, Big);

const N = sum.is(1);
const S = sum.is('string');
const B = sum.is(0xDeadBeefn);
const Boo = sum.is(true);
const F = sum.is({});

// console.log({ N, S, B, Boo, F });