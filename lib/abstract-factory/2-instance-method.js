'use strict';

class Product {
  constructor(name, options) {
    this.name = name;
    this.options = options;
  }

  static metallic(manufacturer) {
    return new Product('metallic', { manufacturer });
  }

  static fabric(material) {
    return new Product('fabric', { material });
  }
}
