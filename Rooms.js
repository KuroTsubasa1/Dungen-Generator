var method = Rooms.prototype;

function Rooms(firstCordX, firstCordY, sizeX, sizeY) {
  this._firstCordX = firstCordX;
  this._firstCordY = firstCordY;
  this._sizeX = sizeX;
  this._sizeY = sizeY;
};

method.validateRoom = function(map) {
  //calc end cordinate
  let endCordX = this._firstCordX + this._sizeX;
  let endCordY = this._firstCordY + this._sizeY;

  console.log(`map[${endCordX},${endCordY}]`);
  console.log('is valid : ' + typeof map[endCordX, endCordY] === 'undefined');
  console.log(map[endCordX, endCordY]);
  if (!typeof map[endCordX, endCordY] == 'undefined') {
    let ix = this._firstCordX;
    for (let iy = this._firstCordY; iy < endCordY; i++) {
      console.log('test');
      map[ix, iy] = 1;
      if (iy == this._sizeY - 1 && ix < endCordX)
        // reset y cordinate
        iy = -1;
        ix++;
      }
    }
  };


module.exports = Rooms;
