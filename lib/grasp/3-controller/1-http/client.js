"use strict";

module.exports = async config => {
  const server = `http://${config.server.host}:${config.server.port}`;
  {
    const response = await fetch(`${server}/seed`, { method: "GET" });
    var seed = await response.json();
  }
  {
    const response = await fetch(
      `${server}/reseed`,
      { method: "POST", body: JSON.stringify({ seed: seed.data }) }
    );
    var reseed = await response.json();
    return { seed: seed.data, reseed: reseed.data };
  }
};
