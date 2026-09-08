'use strict';

const { randomUUID } = require("node:crypto");

class Postgres {
  async insert(payload) {
    // ...
    const id = randomUUID();
    return id;
  }
}

class Mongo {
  async insert(payload) {
    // ...
    const id = randomUUID();
    return id;
  }
}

class UserRepository {
  #db;
  constructor(db) {
    this.#db = db;
  }

  async create(payload) {
    return await this.#db.insert(payload);
  }
}

const repo0 = new UserRepository(new Postgres());
const repo1 = new UserRepository(new Mongo());

repo0.create().then(console.log.bind(null, 'repo0:'));
repo1.create().then(console.log.bind(null, 'repo1:'));
