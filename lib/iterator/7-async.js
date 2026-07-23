'use strict';

const { setTimeout } = require("node:timers/promises");

async function* gen(limit) {
  while (limit-- > 0) {
    await setTimeout(300);
    yield Math.random();
  }
}

void async function () {
  for await (const float of gen(10)) {
    console.log('delayed:', float);
  }
}();