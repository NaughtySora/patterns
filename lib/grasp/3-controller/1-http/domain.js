"use strict";

const UINT_MAX = ~0 >>> 0;

const uxorshift = x => {
  x ^= x >> 13;
  x ^= x >>> 17;
  x ^= x << 5;
  return x >>> 0;
};

module.exports = {
  seed() {
    return Math.random();
  },
  reseed(seed) {
    return uxorshift(seed * UINT_MAX) / UINT_MAX;
  }
};
