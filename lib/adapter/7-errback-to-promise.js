'use strict';

const promisify = callback => (...args) => {
  const { promise, resolve, reject } = Promise.withResolvers();
  callback(...args, (err, ...data) => {
    if (err) reject(err);
    else resolve(...data);
  });
  return promise;
};
