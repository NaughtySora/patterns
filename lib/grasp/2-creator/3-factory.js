"use strict";

// Character is creator, using classic OOP factories.

class Skills {}

class Character {
  constructor(name) {
    this.name = name;
    this.stats = this.createStats();
    this.skills = new this.getSkills();
  }

  createStats() {
    return { hp: 1000 };
  }

  getSkills(){
    return Skills;
  }
}

class Boss extends Character {
  constructor(name) {
    super(name);
  }

  createStats() {
    return { hp: 50000, attack: 9999 };
  }
}

const character = new Boss("Baium");