# Creator
- Assign abstraction B the responsibility to create an 
abstraction A if one of these is true:
1. B contains A
2. B records A (B stores/maintains information about A)
3. B aggregates A (A is part of aggregation B)
4. B closely uses A
5. B has the initializing data for A

#### Notes
Creator can be confusing, but to get the idea you need only one sentence.
Create is about "who" creates/instantiating something.
Thats it, Creator may not know from where class/factory comes and even what it creates.
Neither it tells about destructing, freeing resources.