# Indirection

### Problem
- How to assign responsibilities to avoid direct coupling.

### Answer
Assign the responsibility to an intermediate object to mediate between other components or
services, so that they are not directly coupled.

### Simplified
- If you don't want both abstractions depend on each other,
create third one and assign task of managing cooperation between them to it.