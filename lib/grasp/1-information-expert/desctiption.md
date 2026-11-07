# Information Expert

### Problem
- A general principle of object design and responsibility assignment.

### Answer
- Assign a responsibility to the information expert - the class that has the information necessary to fulfill the responsibility.

### Simplified
- Assign a responsibility to an abstraction that has the 
most information needed to fulfill the task.

### Notes
- It teaches responsibility assignment.\
- The principle doesn't require abstraction to exist beforehand.

### Example
- It should be obvious that database connection should not know about particular queries.\
- Neither http server should know about database connections.