package com.tomtom.example;

/*
 * Remove "public" in the line below if using this with rextester.com
 */
public class Rextester
{  
    static class Square {
        public final int height;
        public final String material;
        
        public Square(int height, String material) {
            this.height = height;
            this.material = material;
        }
    }
    
    static Square[][] solution(int width, int height, int seed) {

        final String[] MATERIAL = { "road", "water", "grass", "building" };
        final Square[][] map = new Square[width][height];

        for (int row = 0; row < width; row++) {
            for (int column = 0; column < height; column++) {
                int squareHeight = (int)(Math.random() * seed);
                int material = (int)(Math.random() * MATERIAL.length);
                map[row][column] = new Square(squareHeight, MATERIAL[material]);
            }
        }
        return map;
    }
    
    static void log(Square[][] map) {
        if (map == null || map.length <= 0) {
            return;
        }

        System.out.println(map.length + " " + map[0].length);
        for (int i = 0; i < map.length; i++) {
            for (int j = 0; j <map[i].length; j++) {
                System.out.print(map[i][j].height + " " + map[i][j].material + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Square[][] map = Rextester.solution(50, 50, 5);
        Rextester.log(map);
    }
}
