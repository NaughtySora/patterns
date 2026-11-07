"use strict";

const { error } = require("naughty-util");

class AbstractStock {
  async history(id, from, to) {  // input interface
    throw error.ImplementationError
      .method(AbstractStock, "history");
    // output interface
    return { id, history: [{ time: Date.now(), price: 100.24, }] };
  }

  async currentPrice(id) { // input interface
    throw error.ImplementationError
      .method(AbstractStock, "currentPrice");
    // output interface
    return 100.24;
  }

  async price24Hours(id) { // input interface
    throw error.ImplementationError
      .method(AbstractStock, "price24Hours");
    // output interface
    return 100.24;
  }
}

// for example this api was first, so its output is identical 
// to what planned to return. 
class Provider1 extends AbstractStock {
  async #request(what, options) { }

  async history(id, from, to) {
    return await this.#request("history", { id, from, to });
  }

  async currentPrice(id) {
    return await this.#request("price", { id });
  }

  async price24Hours(id) {
    return await this.#request("price24", { id });
  }
}


// After some time, we change provider for some reason,
// its api supports history, but data is in different format
class Provider2 extends AbstractStock {
  async #request(what, options) { }

  async history(id, from, to) {
    const data = await this.#request("history", {
      id,
      from: new Date(from).toISOString(),
      to: new Date(to).toISOString(),
    });
    return {
      id,
      history: data.history.map(item => ({
        time: Date.parse(item.date),
        price: item.historyPrice,
      })),
    };
  }

  async currentPrice(id) {
    return await this.#request("price", { id });
  }

  async price24Hours(id) {
    return await this.#request("price24", { id });;
  }
}

