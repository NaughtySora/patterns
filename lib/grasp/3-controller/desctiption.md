# Controller

### Problem
- Who handles a system event

### Answer
- Assign the responsibility for handling a system event message to a class representing one of:
1. Represents the overall system, device, or a subsystem
2. Represents a use case scenario within which the system event occurs

### Simplified
- There should be a dedicated abstraction that handles events.

#### Example
- Handling gui events should not be hardcoded into logic of the application.
- Handling http requests should not be hardcoded into business logic.
