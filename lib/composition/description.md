# Composition 
Combining independent parts according to well-defined rules.

It appears:
- Function theory
- Algebraic Data Types 
- OOP
- Dataflow
- Hardware

### Classification
- Fundamental abstraction pattern

#### Problem
Allows making independent parts and design various task specific combinations.
Solves assembling complexity.

#### Examples of different compositions
1. ADTs - structural composition
2. OOP object composition - structural composition
3. Function composition - behavioral composition
4. Pipelines - behavioral composition
5. Unix pipes - behavioral composition

#### Notes
Usually composition itself is immune / stateless, but its
parts can have internal state.

Touches many programming aspects and directions like:
- functional compositions in Lisp or Haskell.
- microservice pipelines, stream pipelines.
- object composition.
- ADT
- Composite Gof pattern.

I wanted to explain functional composition and pipelining, but
ended up in abstract composition idea.

Different between pipeline and functional composition.
1. Pipeline, immediately executes operations on a specific value.
##### For example 
promise pipeline executes ones, immediately after defining
```js
const result  = await new Promise((r) => r(10))
.then(data => data**2);
```
2. Composition, creates a new reusable (function | object...) 
that holds the chained operations.
##### For example 
Composition usually has no state, but independent parts could have it.
```js
const f1 = () => (f1.counter++, 10);
f1.counter = 0;
const f2 = x => x**2;
const compose = (...args) => {
  //...
};
const f3 = compose(f1, f2);
```

#### function compositions are directional:
1. left-to-right (pipe)
evaluates fn1 first, passes its result to fn2
pipe(fn1, fn2)(data)

2. right-to-left (compose)
evaluates fn1 first and passes its result to fn2
compose(fn2, fn1)(data) 

But i prefer use right-to-left and call it compose.
Right-to-left is readable and convenient,
calling it compose reflects intent better than pipe.

#### function can be staged or fused:
- Staged composition, processing happens in global stages,
the whole dataset moves from stage to stage

- Fused composition, Operations are combined 
into one per-element transformation
