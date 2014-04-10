var newGame = require('voxel-hello-world');

/// Colour tables

var COLOR_NAME_TABLE = {
  other: '#E8E8E8',
  grass: '#2B960E',
  building: '#DE912C',
  road: '#34343A',
  water: '#00B1FC'
};

var COLOR_NAME_LIST = ['other', 'grass', 'road', 'building', 'water'];

function getColorValue(name) {
  return COLOR_NAME_TABLE[name];
}

function getColorIndex(name) {
  return COLOR_NAME_LIST.indexOf(name) || 0;
}

var COLOR_VALUE_LIST = COLOR_NAME_LIST.map(getColorValue);


/// MapSpec utilities  

function MapSpec(w, h, def, blocks) {
  if (blocks === undefined) blocks = [];
  var x, y, matrix;

  this.width = w;
  this.height = h;
  this.default = def;

  matrix = new Array(h);
  
  for (y = 0; y < h; ++y) {
    matrix[y] = new Array(w);
    for (x = 0; x < w; ++x) {
      matrix[y][x] = blocks[x + y * w] || def;
    }
  }

  this.matrix = matrix;
}

MapSpec.prototype.set = function (x, y, def) {
  return this.matrix[y][x] = def;
};

MapSpec.prototype.get = function (x, y) {
  if (0 <= x && x < this.width && 0 <= y && y < this.height) {
    return this.matrix[y][x];
  } else {
    return this.default;
  }
};

MapSpec.prototype.log = function () {
  var out = process.stdout, x, y, cell;
  out.write(this.width + ' ' + this.height + '\n');
  
  for (y = 0; y < this.height; ++y) {
    for (x = 0; x < this.width; ++x) {
      cell = this.matrix[y][x];
      if (x !== 0) out.write(' ');
      out.write(cell.height + ' ' + cell.material);
    }
    out.write('\n');
  }
};

MapSpec.parse = function (s) {

  function toBlock(bs) {
    var blockm = bs.match(/\W*(\d+)\W*(\w+)\W*/);
    return {height: parseInt(blockm[1]), material: blockm[2]};
  }

  try {
    // We actually ignore newline formatting completely

    var headerm = s.match(/(\d+)\W(\d+)\W((?:.|\n)*)/);
    if (!headerm) throw 'Map header does not begin with two integers';

    var width = parseInt(headerm[1]);
    var height = parseInt(headerm[2]);
    var body = headerm[3];

    var blocks = body.match(/\W*\d+\W*\w+/g);
    if (!blocks) throw 'Body does not contain matched height material pairs: ' + body;

    if (width * height !== blocks.length) {
      throw 'Body contains less height material pairs than declared in header';
    }

    return new MapSpec(width, height, {height: 0, material: 'grass'}, blocks.map(toBlock));
  } catch (err) {
    if (window) {
      window.alert('Map parse error: ' + err);
    } else {
      console.log('Map parse error: ' + err);
    }
    return;
  }
};

function cityBlockMap() {
  var map = new MapSpec(60, 60, {height: 0, material: 'road'});
  var x, y;

  for (x = 0; x < map.width; ++x) {
    for (y = 0; y < map.height; ++y) {
      if (x % 3 === 0 || y % 3 === 0) {
        // Leave at road default
      } else {
        map.set(x, y, {height: 1 + Math.floor(Math.random() * 6), material: 'building'});
      }
    }
  }

  return map;
}

/*
function Map(w, h, blocks) {
  this.width = w;
  this.height = h;
  this.shiftw = Math.floor(w / 2);
  this.shifth = Math.floor(h / 2);
  this.data = blocks;
  this.default = {height: 0};
}

Map.prototype.get = function (x, y) {
  var dx = x + this.shiftw;
  var dy = y + this.shifth;
  if (dx < 0 || dy < 0) return this.default;

  return this.data[dx + dy * this.height] || this.default;
};
*/


var map1 = '2 2\n\
2 red 4 red\n\
8 red 6 red';

// var m1 = parseMap(map1);

var heights = {};

var show = cityBlockMap();

function makeGenerator(show) {

  function generate (x, y, z) {
    // As an optimisation we generate nothing below ground level
    if (y < 0 || y > 20) return 0;

    var maph = show.get(x, z);
    if (maph) {
      if (y > maph.height) {
        return 0;
      } else {
        return getColorIndex(maph.material) + 1;
      }
    }

    return 0;
  }

  return generate;
}

function renderMap(data) {
  var game = newGame({
    lightsDisabled: false, 
    materials: COLOR_VALUE_LIST,
    materialFlatColor: true,
    chunkSize: 60,
    chunkDistance: 2,
    startingPosition: [0, 1000, 0],

    generate: makeGenerator(data)
  });
}

window.renderMap = function () {
  var input = document.getElementById('renderbutton');
  input.disabled = true;

  var mapdata = document.getElementById('mapdata').value;
  var show = MapSpec.parse(mapdata);
  if (show === undefined) {
    input.disabled = false;
    return;
  } else {
    setTimeout(function () { renderMap(show); }, 1 * 1000);
  }
};

/*
var createSky = require('voxel-sky')(game);
var sky = createSky(1200); // Set to noon
*/

// rotate camera to look straight down
// game.controls.pitchObject.rotation.x = -1.5;

// eof
