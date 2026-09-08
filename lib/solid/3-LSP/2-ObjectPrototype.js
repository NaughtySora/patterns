// Object class, object has method toString() -> "[object Object]"
const obj = {};

// subclass of Object class, toString() -> "abc"
const string = "abc";

// subclass of Object class, toString() -> "1"
const number = 1;

/**
 * Has toString with extended interface.
 * you can pass encoding, by default its utf-8, 
 * it doesn't break toString interface
 */
const buffer = Buffer.from("abc");

console.log('Prototypes chain:');
console.log('obj', obj.__proto__);
console.log('string:', string.__proto__.__proto__);
console.log('number:', number.__proto__.__proto__);
console.log('buffer:', buffer.__proto__.__proto__.__proto__.__proto__);

console.log();

console.log(
  'obj.toString:', obj.toString(), "\n",
  'string.toString:', string.toString(), "\n",
  'number.toString:', number.toString(), "\n",
  'buffer.toString:', buffer.toString(),
);