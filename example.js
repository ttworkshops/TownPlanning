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
