## Dependency Inversion Principle (DIP) 

#### description 
High-level modules should rely on abstractions rather than concrete details.

Describes relations in application architecture.
Its again closely related to rest.

High and low abstraction means high abstraction uses lower ones.
Lower is smaller part of a big (high) abstraction.
High cause it usually lays closer to client/domain logic.

for example:
tcp socket -> connection -> database connection -> repository -> user service

in this example tcp socket is low level abstraction, the close it to hardware, drivers, os,
etc the more lower it.
Lower | High is abstract and related terms.
i have only 1 term, it can't be low or high, i need pivot to measure its impact and position
in the system.

socket is low for above example, but its pretty high for hardware perspective.

The Dependency Inversion describes that high(upper) abstractions have to communicate
through interfaces rather then direct communication.

what does it mean?
In this example i use db interface with method insert.
i have an interface that db entity has to have insert async method
with particular argument type and return type.
Now i can use both mongodb and postgres to insert the user, the upper
abstraction doesn't know where user stored, it only knows
it will insert some fields and get back unique identifier.
In some languages you need explicitly make interface for this, js
can use duck typing, use language specific methods to implement the same
idea, do not copy the same example across languages.

```js
class Postgres {
  async insert(payload){
    // ...
    return id;
  }
}

class Mongo {
  async insert(payload){
    // ...
    return id;
  }
}

class UserRepository {
  constructor(db){
    this.db = db;
  }

  async create(payload){
    return await this.db.insert(payload);
  }
}

```