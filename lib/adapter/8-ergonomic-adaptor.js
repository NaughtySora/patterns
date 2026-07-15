'use strict';

const timeout = (ms, callback, ...args) =>
  setTimeout(callback, ms, ...args);

const timeout1000 = timeout.bind(null, 1000);
const timeout250 = timeout.bind(null, 250);