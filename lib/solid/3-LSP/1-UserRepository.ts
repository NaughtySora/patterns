'use strict';

import { randomUUID } from "node:crypto";

class UserRepository {
  connection: any;
  async create(user: { email: string, hash: string}): Promise<string>{
    const res = await this.connection.insert(user);
    return res.id;
  }
}


class MockUserRepository {
  private storage = new Map();
  async create(user: { email: string, hash: string }): Promise<string>{
    const id = randomUUID();
    this.storage.set(id, {...user, id});
    return id;
  }
}