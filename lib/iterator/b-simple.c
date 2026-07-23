#include <stdlib.h>
#include <stdio.h>

void * next(void * iterable, size_t *i, size_t elements, size_t size){
  size_t pointer = *i;
  if(pointer >= elements) return NULL;
  void *data = (char *)iterable + (pointer * size);
  (*i)++;
  return data;
}

void * next_circular(void * iterable, size_t *i, size_t elements, size_t size){
  size_t pointer = *i;
  if(pointer >= elements) pointer = 0;
  void *data = (char *)iterable + (pointer * size);
  (*i)++;
  return data;
}

void simple(){
   size_t c = 0;
  size_t *i = &c;

  int arr[5] = {1,2,3,4,5};

  int *one = next(arr, i, 5, 4);
  int *two = next(arr, i, 5, 4);
  int *tree = next(arr, i, 5, 4);
  int *four = next(arr, i, 5, 4);
  int *five = next(arr, i, 5, 4);

  printf("---Simple iterator---\n");
  printf("%d\n", *one);
  printf("%d\n", *two);
  printf("%d\n", *tree);
  printf("%d\n", *four);
  printf("%d\n", *five);
}

void circular(){
  size_t c = 0;
  size_t *i = &c;

  int arr[5] = {1,2,3,4,5};

  int *one = next_circular(arr, i, 5, 4);
  int *two = next_circular(arr, i, 5, 4);
  int *tree = next_circular(arr, i, 5, 4);
  int *four = next_circular(arr, i, 5, 4);
  int *five = next_circular(arr, i, 5, 4);
  int *six = next_circular(arr, i, 5, 4);

  printf("---Circular iterator---\n");
  printf("%d\n", *one);
  printf("%d\n", *two);
  printf("%d\n", *tree);
  printf("%d\n", *four);
  printf("%d\n", *five);
  printf("%d\n", *six);
}

int main(void){
  simple();
  circular();

  return 0;
}