## Single Responsibility Principle (SRP)

#### description
- A class should have only one reason to change.

#### Notes
- Usually its good thing to have only one client for an abstraction.

#### Consequences  
1. Neglecting SRP 
- Requires extreme caution and a lot of effort to keep in mind
all code that you write or know about. 
Its usually called "code ownership" but more codebase grows
more effort is required to remember everything code does, all its dependencies.
As soon as you leave, different people need to maintain this codebase and carry
its legacy.

2. Using SRP
Introduces code duplication, which can be solved with
shared modules, which can also introduce shared logic and same problems + overhead of keeping
few interfaces and maintain them, but overall it will require less codebase ownership and
cognitive load on developers. 
Share only basic logic with no domain/client demands, if you need specific things
put them into separated interfaces.

#### Example UserRepository
If you have a user repository, and many different users use it, 
changes in methods or internal logic can cause security leaks, 
conflicting logic, and more.

Its better to have separated interfaces for different users. 

If you have Shared.create() and you need to change something for admin, 
move it to Admin.createSpecificRuleName.

#### Example JWTToken
More general entities, for example JWTToken class.
Provides logic for creating jwt token with no knowledge of the domain.

But again, each user better to user own credentials.

In this case abstract user_a can use user_a_secret and user_a_payload 
while abstract user_b can use user_b_secret and user_b_payload.

If user_a needs to change secret or add claims, fields, any data to payload it will not affect user_b.
If user_a secret will be compromised, attacker can't forge user_b credentials.