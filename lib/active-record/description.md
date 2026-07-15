# Active Record [anti-pattern] (Fowler) 
An object represents a row in a database table or document in a collection.
It contains both data and persistence logic hance a lot of responsibility
on on entity, db mapping, business logic/model, persistence control.

### Problem
Allowing developers to interact with database records using simple 
programming methods instead of writing complex, repetitive SQL statements (ORM).

### Notes:
- I think its more anti-pattern than pattern, entity that saves itself do sound bad.
Used in domain logic and represents things like 'Product' 'User'.
Especially in information systems where 90%+ entities just data,
creating an entity like 'Product' seems redundant and logically incorrect.
Product can't self serialize or save, Product is just an information about
real product and here we entering into decision wether we model abstract model
or real object representation.
In any case using Active Record forces us to break abstraction layers and SoC by
combining different responsibilities into one entity. 

- It pushes people to make classes without any additional logic
and usually we end up with anemic classes.
```js
class Record {
  async save(){
    await this.connection.insert(this.key, this.data);
  }
}
class User extends Record {
  constructor(id, name, lastName){
    super();
    this.key = id;
    this.data = { name, lastName };
  }
}
```

- It makes application pass, accepts and operate on ORM objects and rely on its behavior.
Application should not pass any business logic specific object back and forth, expecting
specific methods, behavior or framework, orm, and etc specific fields, methods and so on.

- Real example, one project was build using mongoose, some of the methods
return plain objects, other instances of Active record combined with
meta information, cluttering the code and creating fragile dependencies across the code.

- Also known issue when Active Record passed in many contexts, 
its hard to track what was deleted, saved and changed, 
it can create situations when we deleted entity in one place but saving in another, 
it can break something, go silently and etc.

- Modeling is just different approach on looking at things.
We can design Product as an actual product and give him methods and call it wrong. 
We can design Product as imaginary product and give it methods and calling it 
'Reach Domain Design' where everything is object and object aggregation.

Violets/Breaking:
Separation of Concerns
Single Responsibility Principle
Layered architecture