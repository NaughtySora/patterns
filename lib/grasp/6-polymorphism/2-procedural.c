#include <errno.h>
#include <stdio.h>
#include <stdlib.h>

#define TO_STRING(x) #x

#define FROM_STRING(type, fn)                                 \
  static int parse_##type(char* str, type* value, int base) { \
    char* endptr;                                             \
    type parsed;                                              \
    errno = 0;                                                \
    parsed = fn(str, &endptr, base);                          \
    if (errno != 0 || *endptr != '\0') return -1;             \
    *value = parsed;                                          \
    return 0;                                                 \
  }

#define TO_TYPE(type, fn)                                            \
  static type to_##type(char* str) {                                 \
    type value;                                                      \
    if (fn(str, &value, 10) == -1) {                                 \
      fprintf(stderr, "Converting string to %s\n", TO_STRING(type)); \
      exit(EXIT_FAILURE);                                            \
    }                                                                \
    return value;                                                    \
  }

FROM_STRING(long, strtol);
TO_TYPE(long, parse_long);

FROM_STRING(unsigned, strtoul);
TO_TYPE(unsigned, parse_unsigned);

FROM_STRING(short, strtol);
TO_TYPE(short, parse_short);

// Created functions can't really vary from the parent in the sense of
// additional functionality, but we preserve the interface and make
// some kind of procedural inheritance.

int main() {
  printf("long: %ld, unsigned: %u, short: %hd\n", to_long("-1"),
    to_unsigned("-1"), to_short("70000"));
  return EXIT_SUCCESS;
}