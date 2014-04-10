#include <stdio.h>
#include <time.h>
#include <stdlib.h>
#include <string.h>

/// Boilerplate for storing, accessing, and writing a map spec

const char* MATERIALS[] = { "road", "water", "grass", "building" };
const int MATERIALS_COUNT = sizeof(MATERIALS)/sizeof(char*);

typedef struct Square {
    int height;
    const char* material;
} Square;

typedef struct MapSpec {
    int width, height;
    Square** squares;
} MapSpec;

MapSpec* newMapSpec(int width, int height) {
    MapSpec* spec = (MapSpec*)malloc(sizeof(MapSpec));
    int y;
    
    spec->width = width; spec->height = height;
    
    spec->squares = (Square**)malloc(height * sizeof(Square*));
    for (y = 0; y < height; ++y) {
        spec->squares[y] = (Square*)malloc(width * sizeof(Square));
    }
    
    return spec;
}

void freeMapSpec(MapSpec* spec) {
    int y;
    
    for (y = 0; y < spec->height; ++y) {
        free(spec->squares[y]);
    }
    free(spec->squares);
    free(spec);
}

void logMapSpec(MapSpec* spec) {
    int x, y;
    
    printf("%d %d\n", spec->width, spec->height);
    for (y = 0; y < spec->height; y++) {
        for (x = 0; x < spec->width; x++) {
            printf("%d %s ", spec->squares[y][x].height, spec->squares[y][x].material);
        }
        printf("\n");
    }
}

/// Your code to populate the map in interesting ways goes here

MapSpec* genMapSpec(int width, int height) {
    MapSpec* spec = newMapSpec(width, height);
    int x, y;
    
    for (y = 0; y < height; ++y) {
        for (x = 0; x < width; ++x) {
            spec->squares[y][x].height = rand() % 20;
            spec->squares[y][x].material = MATERIALS[rand() % MATERIALS_COUNT];
        }
    }
    
    return spec;
}

int main() {
  const int WIDTH = 61, HEIGHT = 61;
    
  MapSpec* spec = genMapSpec(WIDTH, HEIGHT);
  logMapSpec(spec);
  freeMapSpec(spec);

  return 0;
}
