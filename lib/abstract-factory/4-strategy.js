'use strict';

const parserMock = {
  md: () => ({}),
  html: () => ({}),
  toml: () => ({}),
};

const parser = {
  md: () => new MDParser(),
  html: () => new HTMLParser(),
  toml: () => new TOMLParser(),
};
