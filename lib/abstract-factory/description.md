# Abstract Factory (GoF)
### Problem
Provide an interface for creating families of related or 
dependent objects without specifying how object being created.

##### Classification 
- creational pattern 

### Notes: 
- I think mistakenly assumed that Abstract Factory should be an abstract class
if particular language allow you to can create Abstract Factory without an abstract class 
you should definitely utilize it, only if its won't hurt the initial idea of using the factory.
- The purpose of this patters is to abstract creation of similar entities 
and hide the creation details, it also concentrates creation in one place.
- It can be used to substitute entities in compile and run time, allows to make your code
flexible with polymorphism and contract programming.

### Related patters: Strategy, Singleton, Prototype, Factory Method
- Strategy related the way you can implement it with abstract factory
- Singleton is because Abstract Factory usually a singleton or static method of a class
- Prototype, possibly instance can be build from prototype, many assembled with many parts.
- Factory Method, also can server for instancing several similar object of the same type
