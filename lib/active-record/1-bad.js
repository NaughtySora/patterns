'use strict';

class User {
  constructor(name) {
    this.name = name;
  }

  setName(value) {
    this.name = value;
  }

  async save() {
    // save to db
  }
}
