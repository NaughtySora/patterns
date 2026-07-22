'use strict';

const red = [238, 75, 43];
const green = [34, 139, 34];
const blue = [135, 206, 235];

class Color {
  get r() {
    return this[0];
  }

  get g() {
    return this[1];
  }

  get b() {
    return this[2];
  }
}

Object.setPrototypeOf(red, Color.prototype);
Object.setPrototypeOf(green, Color.prototype);
Object.setPrototypeOf(blue, Color.prototype);

const pallet = { blue, red, green, };

// console.log(pallet.blue.r);