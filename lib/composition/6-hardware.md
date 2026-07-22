## Hardware composition 
Combining simple gates into circuits with higher-level behavior.

#### Carry logic of a Full Adder:
Two AND gates detect two possible ways to create a carry.
The OR gate combines these cases into one CARRY output.
The result is a larger circuit built from smaller primitive gates.
```
        +---------+
A ------|         |
B ------|   AND   |----+
        +---------+    |
                       |
                       v
                    +-----+
                    | OR  |------ CARRY
                    +-----+
                       ^
                       |
        +---------+    |
S1 -----|         |----+
Cin ----|   AND   |
        +---------+
```

#### ALU
Many arithmetic circuits + multiplexer
```
                 A
                 |
                 |
        +--------+--------+
        |        |        |
        v        v        v
    +------+ +------+ +------+
    | ADD  | | AND  | | XOR  |
    +------+ +------+ +------+
        |        |        |
        +--------+--------+
                 |
                 v
             +-------+
Control ---->|  MUX  |---- Result
             +-------+
```

A multiplexer (MUX) is an electronic device that selects one of 
several analog or digital input signals and 
forwards it to a single output line

The MUX is basically:
if(operation == ADD) use adder
if(operation == AND) use AND circuit
if(operation == XOR) use XOR circuit