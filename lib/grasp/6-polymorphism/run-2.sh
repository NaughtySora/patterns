#!/bin/bash

if type gcc &> /dev/null; then
  CC="gcc"
elif type clang &> /dev/null; then
  CC="clang"
else
  echo "Neither gcc nor clang was found."
  exit 1
fi

file="2-procedural.c"
name="${file%.*}"
$CC "${file}" -o ${name}
./${name}
rm "${name}"