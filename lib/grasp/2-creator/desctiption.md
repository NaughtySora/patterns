# Creator
- Assign abstraction B the responsibility to create an 
abstraction A if one of these is true:
1. B contains A
2. B records A (B stores/maintains information about A)
3. B aggregates A (A is part of aggregation B)
4. B closely uses A
5. B has the initializing data for A

The 1,2,3 can be generalized just as B contains A.

#### Notes
Create is about instancing, not about knowing.
For example if B creates A it means not that B knows A.
It means B will instance A, it can be done in any way, for example:
1. B: new A();
2. B: constructor(A) -> new A();
And more exotic ones, language/paradigm specific.

#### Alternative ways
- Create A and aggregate with B:
```js
const item = new Item();
const order = new Order();
order.add(item);
```
- Use factories
1. factory.getA();
2. new classFactory.getA();
