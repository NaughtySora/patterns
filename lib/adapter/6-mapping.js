'use strict';

class SomeApi {
  #basename;
  #secret;

  constructor(options) {
    this.#secret = options.secret;
    this.#basename = options.basename;
  }

  async request(path, method) {
    return await fetch(`${this.#basename}${path}`, {
      method,
      headers: {
        'secret': this.#secret,
        'content-type': 'application/json',
      },
    });
  }

  async get(path) {
    return this.request(path, 'GET');
  }

  async getSomethingBy(name) {
    return await this.get(`/v1/something?name=${this.#map(name)}`);
  }
  
  #map(key) {
    if (!Object.hasOwn(SomeApi.#mapper, key)) {
      throw new Error(`unsupported key ${key}`);
    }
    return SomeApi.#mapper[key];
  }

  static #mapper = {
    a: 'A',
    b: 'ABC',
  };
}