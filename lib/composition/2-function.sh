#!/bin/bash

gcc -o 2-function 2-function-fused-staged.c util.c
./2-function
rm 2-function