#include <stdint.h>
#include <stdlib.h>
#include <assert.h>

typedef struct {
  size_t length;
  void* data;
} vector;

typedef void (*callback)(void*, size_t);

vector* vec_alloc(size_t length, size_t element) {
  if (element == 0) return NULL;
  if (length > (SIZE_MAX / element)) return NULL;
  vector* vec = malloc(sizeof(vector));
  if (!vec) return NULL;
  vec->length = length;
  vec->data = NULL;
  if (length > 0) {
    vec->data = calloc(length, element);
    if (!vec->data) return (free(vec), NULL);
  }
  return vec;
}

void vec_destroy(vector *v){
  if(v == NULL) return;
  free(v->data);
  free(v);
}

void vec_each(vector* vec, callback fn) {
  size_t i = 0;
  size_t length = vec->length;
  while (i < length) fn(vec, i++);
}

typedef struct Node {
  void* data;
  struct Node* next;
} node;

typedef struct List {
  node* head;
  node* tail;
} list;

list* list_alloc() {
  list* l = malloc(sizeof(*l));
  if(!l) return NULL;
  l->head = l->tail = NULL;
  return l;
}

node* list_node_alloc(void* data) {
  node* n = malloc(sizeof(*n));
  if(!n) return NULL;
  n->data = data;
  n->next = NULL;
  return n;
}

void list_push(list* l, void* data) {
  node* n = list_node_alloc(data);
  if (l->head == NULL) l->head = n;
  else l->tail->next = n;
  l->tail = n;
}

node* list_pop(list* l) {
  node* tail = l->tail;
  if (tail == NULL) return tail;
  if (l->head->next == NULL) return (l->head = l->tail = NULL, tail);
  node* n = l->head;
  while (n->next != tail) n = n->next;
  l->tail = n;
  tail->next = NULL;
  return tail;
}

node* list_shift(list *l){
  node* n = l->head;
  if(n == NULL) return n;
  l->head = l->head->next;
  n->next = NULL;
  if(l->head == NULL) l->tail = NULL;
  return n;
};

void list_unshift(list *l, void* data){
  node *n = list_node_alloc(data);
  if(l->head == NULL) l->tail = n;
  else n->next = l->head;
  l->head = n;
};

typedef void (*list_node_destroy)(void *);

void list_destroy(list *l, list_node_destroy destroy){
  if(l == NULL) return;
  assert(destroy);
  node *n = l->head;
  while(n != NULL) {
    node*next = n->next;
    destroy(n->data);
    free(n);
    n = next;
  }
  free(l);
}