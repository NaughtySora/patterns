#ifndef C_DATA_STRUCTURE_UTIL
#define C_DATA_STRUCTURE_UTIL

#include <stdlib.h>

typedef struct {
  size_t length;
  void* data;
} vector;

typedef void (*callback)(void*, size_t);
vector* vec_alloc(size_t length, size_t element);
void vec_destroy(vector *v);
void vec_each(vector* vec, callback fn);

typedef struct Node {
  void* data;
  struct Node* next;
} node;

typedef struct List {
  node* head;
  node* tail;
} list;

list* list_alloc();
node* list_node_alloc(void* data);
void list_push(list* l, void* data);
node* list_pop(list* l);
node* list_shift(list *l);
void list_unshift(list *l, void* data);

typedef void (*list_node_destroy)(void *);

void list_destroy(list *l, list_node_destroy destroy);

#endif