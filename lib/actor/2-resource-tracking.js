'use strict';

const { misc } = require("naughty-util");

class Tracker {
  #framework = null;
  #timer = null;
  #interval = 0;
  #resource;
  #state;

  constructor(framework, resource, internal) {
    this.#framework = framework;
    this.#resource = resource;
    this.#interval = internal;
    this.#schedule();
  }

  #schedule() {
    this.#timer = setTimeout(async () => {
      await this.#ping();
      if (this.#timer); this.#timer.refresh()
    }, this.#interval);
  }

  async #ping() {
    try {
      const res = await fetch(this.#resource, { method: 'HEAD' });
      const state = this.#state;
      if (res.ok !== this.#state) this.#state = res.ok;
      if (state !== this.#state) {
        this.#framework.notify({
          command: 'ping',
          data: { resource: this.#resource, status: this.#state },
        });
      }
    } catch (e) {
      console.error(e);
    }
  }

  stop() {
    this.#timer[Symbol.dispose]();
    this.#timer = null;
    console.log('tracker stopped');
  }
}

class Templator {
  #framework = null;

  constructor(framework) {
    this.#framework = framework;
  }

  status({ resource, status }) {
    const template = `${resource} is ${status ? 'live' : 'down'}`;
    this.#framework.notify({ command: 'template', data: template });
  }

  notify(message) {
    if (message.command === 'template') {
      this.status(message.data);
    }
  }

  stop() {
    console.log('templator stopped');
  }
}

class Mailer {
  #out = null;

  constructor(out) {
    this.#out = out;
  }

  notify(message) {
    if (message.command = 'status') {
      this.#out.write(`${message.data}\n`);
    }
  }

  stop() {
    console.log('mailer stopped');
  }
}

class Framework {
  #options = null;
  #actors = new Map([
    ['tracker', []],
    ['templator', []],
    ['mailer', []],
  ]);

  constructor(options) {
    this.#options = options;
    this.#start();
    process.on('SIGINT', () => {
      this.stop();
    });
  }

  #start() {
    Object.entries(this.#options).forEach(entry => {
      const actor = this[entry[0]].bind(this);
      let count = entry[1].count;
      const args = entry[1].args;
      while (count-- > 0) actor.apply(null, args);
    });
  }

  tracker(url, interval = 1000) {
    const actor = new Tracker(this, url, interval);
    this.#actors.get('tracker').push(actor);
  }

  templator() {
    const actor = new Templator(this);
    this.#actors.get('templator').push(actor);
  }

  mailer(out) {
    const actor = new Mailer(out);
    this.#actors.get('mailer').push(actor);
  }

  notify(message) {
    if (message.command === 'ping') {
      const actors = this.#actors.get('templator');
      const max = actors.length - 1;
      const index = max === 0 ? 0 : misc.random(max, 0);
      actors[index].notify({
        command: 'template',
        data: message.data,
      });
    }
    if (message.command === 'template') {
      const actors = this.#actors.get('mailer');
      const max = actors.length - 1;
      const index = max === 0 ? 0 : misc.random(max, 0);
      actors[index].notify({
        command: 'status',
        data: message.data,
      });
    }
  }

  stop() {
    for (const dataset of this.#actors.values()) {
      for (const actor of dataset) actor.stop();
    }
  }
}

// const framework = new Framework({
//   tracker: {
//     count: 1,
//     args: ['https://google.com'],
//   },
//   templator: {
//     count: 2,
//     args: [],
//   },
//   mailer: {
//     count: 1,
//     args: [process.stdout],
//   }
// });


