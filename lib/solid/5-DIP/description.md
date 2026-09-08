## Dependency Inversion Principle (DIP) 

#### description 
High-level modules should rely on abstractions rather than concrete details.

#### Notes
Describes relations in application architecture.\
Its again closely related to the rest of SOLID principals.

High and low abstraction means high abstraction uses lower ones.\
Lower is smaller part of a big (high) abstraction.\
High usually lays closer to client/domain logic.

More abstraction close to hardware, drivers, os, the more its classified as "low"

Lower and High are abstract terms.\
You need a pivot to measure its impact and position in the system, 
to tell what is low and what is high.

The Dependency Inversion describes that high(upper) abstractions have to communicate
through interfaces rather then direct communication.\
It means high abstraction should depend on interfaces, methods, signatures
and not concrete abstractions and internal structure.

Connected to Law of Demeter (don't talk to strangers).

#### Example
```
tcp socket -> connection -> database connection -> repository -> user service
```

TCP socket is low level abstraction, and user repository is high.\
User repository should not know about tcp, connection, retries, pools, networks, etc.
