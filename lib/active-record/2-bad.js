'use strict';

class Player {
  async reduceHP(value) {
    this.hp -= value;
    this.save();
  }

  async save() {
    // save to db
  }
}