#!/usr/bin/env -S node
"use strict";

const config = require("./config.js");
const server = require("./server.js");
const client = require("./client.js");
const routes = require("./routes.js");

void async function () {
  await server(config.server, routes);
  const result = await client(config);
  console.log(result);
  process.exit(0);
}();