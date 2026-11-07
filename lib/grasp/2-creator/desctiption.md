# Creator

### Problem
- Who creates.

### Answer
- Assign class B the responsibility to create an instance of class A if one of:
1. B contains A.
2. B records A (B stores/maintains information about A).
3. B aggregates A (A is part of aggregation B).
4. B closely uses A.
5. B has the initializing data for A.

### Simplified
- Creator is about "who" creates/instantiating something.

#### Notes
- Creator can use various different DI (dependency injection) methods to get make an instance.