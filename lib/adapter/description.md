# Adapter (Gof) 
Also known as wrapper.

Transform one contract into another. 
Adapts one interface into another.

### Problem
Solves the problem of interface incompatibility

#### Classification 
- structural pattern 

### If there is an interface it means there is a adaptor for it.

# Note
- Generally this pattern gives you almost no restrictions.
Basically the main idea is, if you have an abstraction of any kind
function, class, instance, and you need it to conform a specific contract
you can use this pattern.

- Pattern describes that anything that makes one entity to work as another is an Adapter.
One of the useful patterns and i think any programmer should at least know about.

- I have seen people confusing Adapter with Repositories, 
Application Services, Decorators and many more.

- The most common confusion when people mess up Adapter and Decorator.
I caught myself doing that a long time ago and i'm sure i will do it again.
The differences between those two:
1. Adapter transforming one contract into another, it changes the interface, not the behavior.
2. Decorator adding a 'behavior' in run or compile time.