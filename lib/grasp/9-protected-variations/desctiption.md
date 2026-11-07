# Protected variations

### Problem
- How to assign responsibilities to objects, subsystems, 
and systems so that the variations or 
instability in these elements do not have an 
undesirable impact on other elements.

### Answer
- Identify points of predicted variation or instability; assign responsibilities 
to create a stable "interface" around them.

### Simplified
- Finds things that will likely to change and what changes will be painful to make.
- As Uncle Bob said, there are volatile and stable abstractions.
- Volatile (like business logic) has to be concrete and depends on stable ones.
The stable ones (like database, caching, mailers, any providers) application (volatile ones) depend on, hard and painful to change, so hide them behind an abstract interface.

### Examples
- Payment provider might change
- Caching provider might change
- Third-party provider for documents, payments, notification and other might change.
