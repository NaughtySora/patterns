"use strict";

const { async } = require("naughty-util");
const { createServer, Socket } = require("node:net");

const PORT = 1337;

const server = createServer((sock) => void sock.end("hi"));
server.listen(PORT);

void async function () {
  const sock = new Socket();
  const connect = async.promisify(Socket.prototype.connect.bind(sock));
  await connect(PORT);
  sock.on("data", data => {
    console.log("data:", data.toString());
    sock.destroy();
    server.close(err => {
      if (err) process.exit(1);
    });
  });
}();
