
## Interface Segregation Principle (ISP)

#### description 
- Clients must not depend on unused interfaces or methods.

Tells us about structuring abstractions. 
Do not create god classes and explicitly define behavior and intent.
Its about modules and composition.
Close to UNIX philosophy about composing programs with smaller ones.
its also related to GRASP low-coupling and high-cohesion, when you create many
small distinct abstractions, making them interact to build bigger abstractions and
connect abstractions without seeing its internal structure and logic.
Also close to law of demeter (don't talk to strangers)

#### Example - shell program
you can create a program that will search unique strings from cli history
containing "docker" and sort them alphabetically from 4 smaller programs
with district small functionality.
history - shows previous entered lines of text in the tty
grep - prints lines that match patterns
uniq - filters lines of text
sort - sorts files of text
program:
history | grep "docker" | uniq | sort

#### Example - array processing js
map is general function for transforming array elements.

map - to make a square of a natural numbers.
filter - to remove odd numbers from array.
sort - to sort number from bigger to smaller.

Although all the methods are in the same array prototype it
shows general idea of segregation interfaces.
We could make MapFilterSort function with awkward interface and
subtle implementation details.
Sometimes for optimization purpose its requires to merge
this logic into 1 loop or use other opt technics but its different story.
```js
const numbers = [1, 2, 3, 4];
numbers
  .map(x => x**2)
  .filter(x => x % 2 === 0)
  .sort((a, b) => b - a) // [16, 4]
```