## Liskov Substitution Principle (LSP)

#### description
- Program objects should be replaceable with subtype 
instances without breaking correctness.

#### Notes
Principal closely related to Open-close.
It tells us that you should not break contract of the parent
abstraction so where you use parent you can use its child.

Its close to duck-typing and contract/interface programming.

if an abstraction has the same signature but it doesn't share the same parent
it can still be used.

#### Example
Any Abstraction can be substituted while testing.
I usually use mock repositories for testing.

#### Example
I love example of JS prototypes and common interfaces.\
Each js entity either or both has in its prototype chain an Object and some common
methods like toString, valueOf and etc.\
So you usually can be sure that using anything.toString will return a string.\
Even if object has not defined toString it will probably have one from Object.prototype.

#### Additional
Sometimes you want to break this principal, go for it if you know what your doing.

I intentionally broke the rule when designed 2 different abstractions
HmacSignature and ISCSignature.

I wanted to have less cognitive load while using them and using appropriate
naming for methods. 

It was never designed to substitute them.

- HmacSignature is for general signature generation.
- ISCSignature is for interservice http communication,
narrowed/specific use.

They share the same naming for methods, but completely different usage.
