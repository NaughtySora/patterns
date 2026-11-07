"use strict";

class Pool {
  #collection = null;

  constructor(count, factory) {
    this._count = count;
    this._factory = factory;
    this.#collection = [];
    while (count--) this.#collection.push(factory());
  }

  capture() {
    return this.#collection.pop();
  }
}

class HeartBeat {
  constructor(ms) {
    this._interval = ms;
  }
}

class Connection {
  constructor(url) {
    this._url = new URL(url);
    this._url.port ||= "1024";
    this._pool = new Pool(16, this._socket.bind(this));
    this[Symbol("heartbeat")] = new HeartBeat(60);
  }

  _socket() {
    return {};
  }

  async connect() { }
  async disconnect() { }
}

const connection = new Connection("http://localhost");
console.log("port:", connection._url.port);
const symbols = Object.getOwnPropertySymbols(connection);
const heartbeat = symbols.find(s => s.description === "heartbeat");
connection[heartbeat]._interval = 120;
const socket = connection._pool.capture();
console.log("socket", socket);
