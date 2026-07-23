# Iterator (GoF)
Provides a way to access the elements of an aggregate object sequentially without
exposing its underlying representation.
Also knows as Cursor.

### Problem
traversing a collection of elements without 
exposing the underlying data structure

### Classification
- behavioral design pattern 

#### Notes
Pretty straightforward description and narrow usage.

JS wides the pattern in different directions presenting
iterable, iterator, generator, async iterator/generator, 
pipeline method chaining (Fluent interface pattern),
and my favorite combination/chaining generators into a pipeline 
making fuse generator composition.

Also stream is a relative of the iterator, they are connected.
