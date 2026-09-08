
## Interface Segregation Principle (ISP)

#### description 
- Clients must not depend on unused interfaces or methods.

#### Notes
Tells us about structuring abstractions and architecture.

Do not create god classes and explicitly 
define behavior and intent of abstraction.

Close to UNIX philosophy about composing programs with smaller ones.

Related to GRASP low-coupling and high-cohesion, when you create many
small distinct abstractions, making them interact to build bigger abstractions and
connect abstractions without seeing its internal structure and logic.

#### Example - shell program
Search a file and return all headlines
get distinct lines and sort them alphabetically.

Logic compose of 4 smaller programs with district small functionality.

1. cat - concatenate files and print on the standard output.
2. grep - prints lines that match patterns.
3. uniq - filters lines of text.
4. sort - sorts files of text.

#### Example - array processing js
process array of numbers 1,2,3,4.

1. filter - remove odd numbers from array.
2. map - make a square of a natural numbers.
3. sort - sort number from bigger to smaller.
