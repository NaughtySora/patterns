## Open Closed Principle (OCP)

#### description
- Entities should be open for extension but closed for modification, allowing new features without altering existing code.

#### Notes
It tells us to not break things that already in use, if you want to introduce change
that will break interface, make new method/field.

It reflects in many different programming corners.
From interface/contract programming to libraries with backward and forward compatibilities.

You can see languages and platforms, for example Nodejs, preserve
old apis and add new api for the same functionality.
for example, node:fs and node:fs/promises.

The semantic versioning x.y.z  works the same way.
- x is major version / breaking changes.
- y minor update.
- z bug fixes.
So application that uses 2.y.z will always work across all y versions.
And only when it needs to move to new x version like 3.y.z it might need 
to change some code / adapt new interfaces/changes.

Even tho many abstraction preserver old methods/fields to not break any code.
You can see so many libs with sometimes confusing a.close(), 
a.destroy(), a.exit(), a.disconnect() and so on. 
Half of them marked as deprecated but left to not break old code.

The general rule is pretty simple. 
If you need to introduce change, it can go in two different ways.
1. You want to change internals, preserving the contract of the abstraction.
2. You want to add new thing or break contract, then make a new method or separated
abstraction.

#### Example
Abstract executor, making calls for apis asynchronously.
Can be easily expend and optimized to use threads, worker pool or any optimization.

#### Example
Subclasses should preserve contract of its parent.

Abstraction that extends from EventEmitter should preserver all its methods / fields.
If abstraction A remove "off" method or changes it in completely different way
Class B that uses A can't remove events. 

If class B sees that A is subclass of event emitter 
it should be able to use event emitter method and 
no accidentally discover that contract changed or method deleted.
