'use strict';

const { randomUUID } = require("node:crypto");

const store = new Map();

class SharedUserRepository {
  async create(payload) {
    const user = { id: randomUUID(), ...payload };
    return user.id;
  }

  search(where) {
    const entries = Object.entries(where);
    for (const item of store.values()) {
      let hit = entries.length;
      for (const entry of entries) {
        if (item[entry[0]] === entry[1]) hit--;
      }
      if (hit === 0) return item;
    }
    return null;
  }
}

class UserRepository extends SharedUserRepository {
  async getAddress(query) {
    const user = this.search(query);
    if (user === null) return null;
    return {
      city: user.city,
      street: user.street,
      zipcode: user.zipcode,
      state: user.state,
      country: user.country,
    };
  }

  async updateAddress(data) {
    const user = this.search(query);
    if (user === null) throw new Error('User doesn\'t exist');
    const updated = Object.assign({}, user, data);
    store.set(user.id, updated);
  }
}

class AdminRepository extends SharedUserRepository {
  async createAdmin(payload) {
    return await this.create({ ...payload, role: 'ADMIN' });
  }

  async getAllUsers(query){
    // pagination, search, sort order...
    // specific admin data like ids, and internal things
  }
}