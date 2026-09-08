'use strict';

const { async } = require("naughty-util");
const { Worker } = require("node:worker_threads");
const { resolve } = require("node:path");
const api = require("./internal/api");

class Executor1 {
  #api = null;

  constructor(api) {
    this.#api = api;
  }

  call(name, callback) {
    async.pause(0).then(() => {
      try {
        this.#api[name]().then(
          res => callback(null, res),
          err => callback(err, null),
        )
      } catch (e) {
        callback(e, null);
      }
    });
  }
}


const WORKER_PATH = resolve(__dirname, "./internal/worker.js");

class Executor2 {
  #workerData = null;

  constructor(api) {
    this.#workerData = this.#modulePath(api);
  }

  call(name, callback) {
    const workerData = this.#workerData;
    const worker = new Worker(WORKER_PATH, { workerData, });
    worker.postMessage({ method: name });
    worker.on('message', ({ result, error }) => {
      if(error) callback(error, null);
      else callback(null, result);
    });
  }

  #modulePath(module) {
    for (const file of Object.keys(require.cache)) {
      const cached = require.cache[file];
      if (cached.exports === module) return file;
    }
  };
}


const executor1 = new Executor1(api);
const executor2 = new Executor2(api);

executor1.call('test', console.log.bind(null, 'executor-1:'));
executor2.call('test', console.log.bind(null, 'executor-2:'));

