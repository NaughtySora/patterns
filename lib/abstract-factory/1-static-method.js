'use strict';

class MDParser { }

class HTMLParser { }

class TOMLParser { }

class DocumentParser {
  static md() {
    return new MDParser();
  }

  static html() {
    return new HTMLParser();
  }

  static toml() {
    return new TOMLParser();
  }
}
