"use strict";

const { http, stream } = require("naughty-util");
const { once } = require("node:events");
const { createServer } = require("node:http");

const HEADERS = {
  "content-type": "application/json; charset=utf-8"
};

module.exports = async (config, routes) => {
  const server = createServer();
  server.on("clientError", (err, socket) => {
    socket.end();
    console.error("Client error", err);
  });
  // HTTP controller, accept request, parse, provide data to application, etc...
  server.on("request", async (req, res) => {
    try {
      const url = http.parseURL(req.url);
      const routeKey = `${req.method}:${url.pathname}`;
      if (!Object.hasOwn(routes, routeKey)) {
        return res.writeHead(404).end();
      }
      const body = req.method === "GET" ? null :
        JSON.parse(await stream.utf8(req) ?? "null");
      try {
        const data = await routes[routeKey](url.searchParams, body);
        res.writeHead(200, HEADERS);
        res.end(JSON.stringify({ data }));
      } catch (e) {
        console.error("Processing error", e);
        res.writeHead(e?.code).end();
      }
    } catch (e) {
      res.writeHead(400).end();
    }
  });
  server.listen(config.port,
    console.log.bind(null, "Server started on port:", config.port));
  await once(server, "listening");
};