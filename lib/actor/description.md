# Actor (Peter Bishop and Richard Steiger universal formalism for concurrent computation and artificial intelligence)
Inspired by mathematical actor model
- 'Actor Model is a mathematical theory and model of concurrent computation that treats "actors" as the universal primitives of digital computation.'

Actor have private state, no shared mutable memory.
Actor communicate only via messages.
Actor process one message at a time.
Actor can send messages and possibly create actors.
Actor can change its behavior (react to messages)

### Problem
It solves the challenge of managing shared state.
Eliminates complex locks and race conditions by treating "actors" as isolated, 
independent entities that communicate exclusively through asynchronous message passing.

##### Classification 
- concurrent pattern 

### Note
- One of the patterns that has so few restrictions and hence confuses many people.
Again, its a pattern, not the concrete implementation.

- Actor used for many things, and when people face actors being used 
they got pretty confused.

- Actors should not know where messages come from, it usually comes from
internal queue, lists, HTTP, messages queues, IPC(mailboxes, naturally sequential message)
the implementation is hidden and can be various. 
1. Actor has internal state, its hidden for anybody else.
2. Actor process messages 1 by 1 usually using queue.
3. Queues can be really different, async queue, unix domain sockets, 
ring buffers, linked lists, arrays it doesn't matter. 

### usages of Actor pattern i have seen
1. Distributed resource tracking:
- Resource tracking Actor - it knows what to track, changes it state,
and sends messages when state changes.
- Template Actor - builds template on request.
- Mailer Actor - when receiving a message it simply sends it.
- Framework Actor - it creates, destroys and holds other actors.

2. Async requests serializer:
- Has private queue.
- Pulling message one by one.
- Executing it linearly.
