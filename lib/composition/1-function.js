'use strict';

const compose = (...fns) => (...args) => {
  if (fns.length === 0) return args;
  let result = fns[0](...args);
  for (let i = 1; i < fns.length; i++) result = fns[i](result);
  return result;
};

const trim = Function.prototype.call.bind(String.prototype.trim);
const toLowerCase = Function.prototype.call.bind(String.prototype.toLowerCase);

const normalize = compose(trim, toLowerCase);

const result = normalize(' hello, worlD');
