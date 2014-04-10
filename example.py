#!/usr/local/bin/python2.7
    
import random

class Square:
  def __init__(self, height, material):
    self.height = height;
    self.material = material;

def generatemap(width, height, seed):
  materials = [ 'road', 'water', 'grass', 'building', 'glass' ]

  matrix = [[None for x in range(width)] for y in range(height)] 
  for x in range(0, width):
    for y in range(0, height):
      squareheight = int(random.random() * seed)
      material = int(random.random() * len(materials) - 1)
      square = Square(squareheight, materials[material])
      matrix[x][y] = square
  return matrix

def printmap(matrix):
  for row in matrix:
    for square in row:
      print str(square.height), " ", square.material, " ",
    print

width = 50
height = 50
matrix = generatemap(width, height, 20)
printmap(matrix)

