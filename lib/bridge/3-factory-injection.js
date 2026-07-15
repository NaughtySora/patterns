'use strict';

class Pool {
  constructor(factory, ...params) {
    this.factory = factory.bind(null, ...params);
  }

  allocate(amount) { }
}

const factory = Buffer.alloc;

const pool = new Pool(factory, 1024);
pool.allocate(3);