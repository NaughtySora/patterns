#!/bin/bash

set -e

if ! command -v gcc &> /dev/null && ! command -v clang &> /dev/null; then
    echo "No gcc or clang was found."
    exit 1
fi

file="2-procedural.c"
name="${file%.*}"
gcc "${file}" -o ${name}
./${name}
rm "${name}"