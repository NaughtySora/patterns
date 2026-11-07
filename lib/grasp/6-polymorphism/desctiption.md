# Polymorphism

### Problem
- Who is responsible when behavior varies by type

### Answer
- When related alternatives or behaviors vary by type (class), assign responsibility for the behavior - using polymorphic operations - to the types for which the behavior varies.

### Simplified
- If behavior varies by type, let the types handle their own variations.
- Define a common interface representing the behavior.
- Have multiple types implement it differently, with possibly extended interface but
preserving the initial behavior.