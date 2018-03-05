var method = Dungeons.prototype;

function Dungeons(sizeX, sizeY) {
  this._sizeX = sizeX;
  this._sizeY = sizeY;
  this._map = [sizeX, sizeY];
}

// fills the map array with 0 wich indicates the tile is empty
method.prepareMap = function() {
  let ix = 0;
  for (let iy = 0; iy < this._sizeY; iy++) {
    this._map[ix, iy] = 0;
    console.log(this._map);
    if (iy == this._sizeY - 1 && ix < this._sizeX) {
      iy = -1;
      ix++;
    }
  }
};

method.getMap = function() {
  return this._map;
};




module.exports = Dungeons;
