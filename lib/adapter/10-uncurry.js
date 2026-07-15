'use strict';

// just idea how to functional inherit functions and make some contracts

const timeout = Function.prototype.call.bind(setTimeout, null);

const log = timeout.bind(null, console.log.bind(null, 'hello'));

const log1000 = log.bind(null, 1000);
const log100 = log.bind(null, 100);
