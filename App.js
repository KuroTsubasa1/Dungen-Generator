const Rooms = require("./Rooms.js");
const Dungeons = require("./Dungeons.js");
const Util = require('./Util.js');


// size values for testing
let sizeX = Util.getRandomNumber(10,100);
let sizeY = Util.getRandomNumber(10,100);

// init a Dungeons object
let dungeon = new Dungeons(sizeX, sizeY)

// prints the map per line
function renderMap() {
  let map = dungeon.getMap();
  dungeon.prepareMap();

  let ix = 0;
  for (let iy = 0; iy < sizeY; iy++) {
    //console.log(map[ix, iy]);
    process.stdout.write(map[ix, iy].toString() + ' ');
    if (iy == sizeY - 1 && ix < sizeX) {
      process.stdout.write('\n');
      iy = -1;
      ix++;
    }
  }
};

// main loop of the programm
const main = function() {
  // clears terminal input
  //console.log('\033[2J');
  renderMap();
}();
