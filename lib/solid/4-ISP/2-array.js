'use strict';

/**
 * Although all the methods are in the same array prototype it
 * shows general idea of segregation interfaces.
 * 
 * We could make MapFilterSort function with awkward interface and
 * subtle implementation details.
 * 
 * Sometimes for optimization purpose it requires to merge
 * logic into 1 loop or use other opt technics but its different story.
 */


const numbers = [1, 2, 3, 4]
  .filter(x => x % 2 === 0)
  .map(x => x ** 2)
  .sort((a, b) => b - a);

console.log(numbers);