"use strict";

const { parentPort, workerData } = require("node:worker_threads");

const api = require(workerData);

parentPort.on("message", async message => {
  try {
    if (message.status === "close") return void process.exit(0);
    const { method } = message;
    const result = await api[method]();
    parentPort.postMessage({ result, error: null });
  } catch (error) {
    parentPort.postMessage({ result: null, error });
  }
});