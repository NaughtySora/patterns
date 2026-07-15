# Bridge (GoF)
Decouple an abstraction from its implementation so that the two can vary independently.

### Problem
Solves class explosion and tight coupling.
Combining hierarchy of classes and allowing them vary independently.

### Classification
- structural pattern

### Notes
- The name of the pattern is very nicely describing a problem.

- We have two or more peaces of land(classes) and we are build a bridge to communicate
between them.
The lands sockets has to conform the bridge sockets (interface).
But one thing feels off, the bridge is not an abstraction.
Bridge is the way abstractions communicate.

The purpose of a Bridge pattern is to replace inheritance with object composition, 
preventing inheritance explosion of classes.
But Bridge can be used outside of classes, use language specific tools to implement Bridge.

Not every object composition is a Bridge.
