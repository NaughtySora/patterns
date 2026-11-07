"use strict";

// Character is creator
// Character has information for Stats, but it knows only that Stats
// class will come from somewhere and it should instance it, relying om Stats interface

class Stats { }

class Character {
  constructor(Stats) {
    const statsOptions = { count: 3, seed: Math.random() };
    const stats = new Stats(statsOptions);
  }
}

const character = new Character(Stats);