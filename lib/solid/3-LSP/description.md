## Liskov Substitution Principle (LSP)

#### description
- Program objects should be replaceable with subtype 
instances without breaking correctness.

Principal closely related to Open-close.
Liskov Substitution tells use that you should not break contract of the parent
abstraction so where you use parent you can use its child.
Also its close to duck-typing and contract/interface programming.
if an abstraction has the same signature but it doesn't share the same parent
it can still be used.

Simple example:
```ts
class UserRepository {
  async create(user: { email: string, hash: string}): Promise<string>{
    const res = await this.connection.insert(user);
    return res.id;
  }
}
```
for testing when you don't need any database you can substitute "real" UserRepository
with MockUserRepository
```ts
class MockUserRepository {
  private storage = new Map();
  async create(user: { email: string, hash: string }): Promise<string>{
    const id = randomUUID();
    this.storage.set(id, {...user, id});
    return id;
  }
}
```
Here MockUserRepository has nothing todo with database, just having the same interface
as UserRepository.

Another example, i love this one, its so simple
```js
const obj = {}; // Object class, object has method toString() -> "[object Object]"
const string = "abc"; // subclass of Object class, toString() -> "abc"
const number = 1; //  subclass of Object class, toString() -> "1"
const buffer = Buffer.from("abc") // also has toString with extended interface, you can 
// pass encoding, by default its utf-8, it doesn't break toString interface can
// be easily used toString() -> "abc"
```

Liskov substitution relevant only if you plan to use childs as parents or vise-verso.
For example, i intentionally broke the rule when designed 2 different abstractions
HmacSignature and ISCSignature.

ISCSignature extends HmacSignature they have the same methods names but different
interface. 
I wanted to have less cognitive load while using them and using appropriate
naming for methods. 
It was never designed to substitute them.
One is for general signature generation and second is for interservice http communication.
ISCSignature is narrowed/specific use of general HmacSignature.
