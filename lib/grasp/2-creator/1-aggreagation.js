"use strict";

// Application is creator
// Application itself has information for stats and character

class Character {
  constructor(stats) {
    this.stats = stats;
  }
}

const stats = { hp: 1000 };
const character = new Character(stats);
