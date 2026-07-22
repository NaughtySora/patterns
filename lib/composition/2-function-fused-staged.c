#include <stdio.h>
#include "util.h"

void fill_rand(void* entity, size_t idx) {
  int* data = ((vector*)(entity))->data;
  data[idx] = rand();
}

void print(void* entity, size_t idx) {
  int* data = ((vector*)(entity))->data;
  printf("%lu: %d\n", idx, data[idx]);
}

/**
 * f1, f2, f3, vec
 * f1(vec) -> f2(vec) -> f3(vec);
 */
void stage_composition(vector *v, list *l){
  if(l->head == NULL || v == NULL) return;
  node *n = l->head;
  while(n != NULL) {
    vec_each(v, n->data);
    n = n->next;
  }
}

/**
 * f1, f2, f3, vec
 * f3(f2(f1(vec[n]))) -> f3(f2(f1(vec[n+1])));
 */
void fuse_composition(vector *v, list *l){
  if(l->head == NULL || v == NULL) return;
  node* head = l->head;
  size_t length = v->length;
  size_t i = 0;
  while(i < length){
    node *n = head;
    while(n != NULL) {
      ((callback)n->data)(v, i);
      n = n->next;
    }
    i++;
  }
}

int main() {
  size_t LENGTH = 32;
  vector* vec0 = vec_alloc(LENGTH, 4);
  vector* vec1 = vec_alloc(LENGTH, 4);

  list * l = list_alloc();
  list_push(l, fill_rand);
  list_push(l, print);

  printf("---Staged composition---\n");
  stage_composition(vec0, l);
  printf("---Fused composition---\n");
  fuse_composition(vec1, l);
}