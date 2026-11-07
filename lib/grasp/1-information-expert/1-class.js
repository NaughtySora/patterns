"use strict";

const { async } = require("naughty-util");

class Connection {
  constructor(options) { }
  async open() { }
  async close() { }
  async destroy() { }
}

class DataAccess {
  #connection = null;
  #options = null;
  #status = 0;

  constructor(options) {
    this.#options = options;
  }

  get stopped() {
    return this.#status === 0;
  }

  get running() {
    return this.#status === 1;
  }

  get stopping() {
    return this.#status === 2;
  }

  async disconnect(ms = 5000) {
    if (!this.running) return;
    this.#status = 2;
    try {
      await Promise.race([
        this.#connection.close(),
        async.reject(ms),
      ]);
    } catch (e) {
      this.#connection.destroy();
      console.error("DataAccess connection close error:", e);
    }
    this.#connection = null;
    this.#status = 0;
  }

  async connect(ms = 5000) {
    if (this.running || this.stopping) return;
    this.#connection = new Connection(this.#options);
    try {
      await Promise.race([
        this.#connection.open(),
        async.reject(ms),
      ]);
      this.#status = 1;
    } catch (e) {
      this.#connection.destroy();
      this.#connection = null;
      throw e;
    }
  }

  async query() {
    return { rows: null, data: null };
  }
}

class SomeRepository {
  #dataAccess = null;
  constructor(dataAccess) {
    this.#dataAccess = dataAccess;
  }

  async getSomeData() {
    return await this.#dataAccess.query('SOME SQL');
  }
}

void async function () {
  const dataAccess = new DataAccess({ port: 3333, hostname: 'localhost' });
  await dataAccess.connect(1000);
  const repo = new SomeRepository(dataAccess);
  const data = await repo.getSomeData();
  console.log(data);
}();