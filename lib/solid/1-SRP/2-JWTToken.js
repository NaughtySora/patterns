'use strict';

const jwt = require('jsonwebtoken');
const { randomUUID } = require('node:crypto');

class HttpUser {
  #config = null;
  constructor(config) {
    this.#config = config;
  }

  access(req, data) {
    const config = this.#config.jwt;
    const cookie = this.#config.cookie;
    const access = jwt.sign({ data, }, config.access.secret, {
      expiresIn: config.access.expiresIn,
      issuer: config.issuer,
      jwtid: randomUUID()
    });
    const refresh = jwt.sign({ data, }, config.refresh.secret, {
      expiresIn: config.refresh.expiresIn,
      issuer: config.issuer,
      jwtid: randomUUID()
    });
    req.cookie(cookie.refresh.key, refresh,
      cookie.refresh.options());
    return access;
  }
}

class MobileUser {
  #config = null;

  constructor(config) {
    this.#config = config;
  }

  access(data) {
    const config = this.#config.jwt;
    const access = jwt.sign({ data }, config.access.secret, {
      expiresIn: config.access.expiresIn,
      issuer: config.issuer,
      jwtid: randomUUID()
    });
    const refresh = jwt.sign({ data }, config.refresh.secret, {
      expiresIn: config.refresh.expiresIn,
      issuer: config.issuer,
      jwtid: randomUUID()
    });
    return { access, refresh };
  }
}

const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;

const http = new HttpUser({
  jwt: {
    access: {
      secret: Buffer.from('secret-access-http'),
      expiresIn: 10 * 60 * 1000,
    },
    refresh: {
      secret: Buffer.from('secret-refresh-http'),
      expiresIn: SEVEN_DAYS,
    },
    issuer: 'http-client',
  },
  cookie: {
    refresh: {
      key: 'refresh',
      options() {
        return {
          path: "/",
          signed: true,
          expires: new Date(Date.now() + SEVEN_DAYS),
          httpOnly: true,
          secure: true,
          sameSite: 'strict',
        };
      },
    }
  }
});

const request = {
  cookie(key, refresh, options) {
    console.log({ key, options, refresh });
  },
};
const access = http.access(request, { id: randomUUID() });
console.log({ access });

const mobile = new MobileUser({
  jwt: {
    access: {
      secret: Buffer.from('secret-access-mobile'),
      expiresIn: 10 * 60 * 1000,
    },
    refresh: {
      secret: Buffer.from('secret-refresh-mobile'),
      expiresIn: SEVEN_DAYS,
    },
    issuer: 'http-client',
  },
});

const tokens = mobile.access({ id: randomUUID() });
console.log(tokens);