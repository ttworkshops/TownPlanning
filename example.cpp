#include <iostream>
#include <string>
#include <vector>

using namespace std;

/// Boilerplate for storing, accessing, and writing a map spec

// All methods declared inline just for brevity

struct Square {
    int height;
    string material;

    Square() { }
    Square(int height, string material) : height(height), material(material) { }
};

class MapSpec {
    vector< vector<Square> > squares;

public:
    int width, height;
    
    Square get(int x, int y) {
        return squares[y][x];
    }

    void set(int x, int y, Square s) {
        squares[y][x] = s;
    }

    MapSpec(int width, int height, Square def) : width(width), height(height) {
        squares.resize(height);
        for (int y = 0; y < height; ++y) squares[y].resize(width);

        // Fill with the default value
        for (int y = 0; y < width; ++y) {
            for (int x = 0; x < width; ++x) {
                squares[y][x] = def;
            }
        }

    }
    
    void log() {
        cout << width << " " << height << "\n";
        for (int y = 0; y < height; ++y) {
            for (int x = 0; x < width; ++x) {
                if (x != 0) cout << " ";
                cout << squares[y][x].height << " " << squares[y][x].material;
            }
            cout << "\n";
        }
    }
};

/// Your code to populate the map in interesting ways goes here

// Materials you can use: "grass", "water", "road", "building"

int main() {
    MapSpec spec(61, 61, Square(0, "grass"));

    for (int y = 0; y < spec.height; y += 2) {
        for (int x = 0; x < spec.width; x += 2) {
            spec.set(x, y, Square(2, "building"));
        }
    }
    
    spec.log();
}
