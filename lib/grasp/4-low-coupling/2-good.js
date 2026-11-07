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

  release(client) {
    this.#collection.push(client);
  }
}

class HeartBeat {
  constructor(ms) {
    this._interval = ms;
  }

  setInterval(ms) {
    this._interval = ms;
  }
}

const kHeart = Symbol("heartbeat");

class Connection {
  constructor(url) {
    this._url = new URL(url);
    this._url.port ||= "1024";
    this._pool = new Pool(16, this._socket.bind(this));
    this[kHeart] = new HeartBeat(60);
  }

  _socket() {
    return {};
  }

  async connect() { }
  async disconnect() { }

  setHeartbeat(ms) {
    this[kHeart].setInterval(ms);
    return this;
  }

  client() {
    return this._pool.capture();
  }

  returnClient(client) {
    this._pool.release(client);
  }

  get url() {
    return new URL(this._url);
  }
}

const connection = new Connection("http://localhost");
console.log("port:", connection._url.port);
connection.setHeartbeat(120);
const client = connection.client();
console.log("client", client);
connection.returnClient(client);
