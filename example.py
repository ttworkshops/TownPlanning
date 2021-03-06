#!/usr/local/bin/python2.7

import random

# Boilerplate for storing, accessing, and writing a map spec

class Square:
  def __init__(self, height, material):
    self.height = height;
    self.material = material;

def printmap(matrix):
  print len(matrix), len(matrix[0])
  for row in matrix:
    for square in row:
      print str(square.height), square.material,
    print

# Your code to populate the map in interesting ways goes here

def generatemap(width, height):
  materials = [ 'road', 'water', 'grass', 'building', 'glass' ]

  matrix = [[None for x in range(width)] for y in range(height)] 
  for x in range(0, width):
    for y in range(0, height):
      squareheight = int(random.random() * 10)
      material = int(random.random() * len(materials) - 1)
      square = Square(squareheight, materials[material])
      matrix[x][y] = square
  return matrix

width = 61
height = 61
matrix = generatemap(width, height)
printmap(matrix)
