'use strict';

// don't like shapes examples, but its first come to mind

// hierarchy 1
class Shape {
  move() {
    throw new Error('Method is not implemented');
  }
}

class Circle extends Shape {
  move() { }
}

class Figure {
  // object composition
  color;
  shape;
  decor;

  constructor(shape) {
    this.shape = shape;
  }

  move(coords) {
    this.shape.move(coords);
  }

  dye(color) {
    this.color = color;
  }

  decorate(decor) {
    this.decor = decor;
  }
}

// hierarchy 2
class Color {
  #schema;
  constructor(r, g, b, a = 1) {
    this.#schema = [r, g, b, a];
  }
}

// hierarchy 3
class Decoration { }
class Glow extends Decoration { }

const circle = new Circle();
const red = new Color(0xc6, 0x1a, 0x09);
const glow = new Glow();

const figure = new Figure(circle); // constructor bridge, DI
figure.dye(red); // method bridge
figure.decorate(glow); // method bridge