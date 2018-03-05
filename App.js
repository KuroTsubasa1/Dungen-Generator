const Rooms = require("./Rooms.js");
const Dungeons = require("./Dungeons.js");
const Util = require('./Util.js');

// size values for testing
// let sizeX = Util.getRandomNumber(10, 100);
// let sizeY = Util.getRandomNumber(10, 100);

let sizeX = 30;
let sizeY = 30;

// init a Dungeons object with random x ,y size
//let dungeon = new Dungeons(sizeX, sizeY)

// prints the map per line
function renderMap(map) {

  // init couter for x cordinate
  let ix = 0;
  for (let iy = 0; iy < sizeY; iy++) {
    // outputs the map per line
    process.stdout.write(map[ix, iy].toString() + ' ');
    if (iy == sizeY - 1 && ix < sizeX) {
      process.stdout.write('\n');
      // reset y cordinate
      iy = -1;
      ix++;
    }
  }
};

function functionName() {

}

// main loop of the programm
const main = function() {

  let dungeon = new Dungeons(sizeX, sizeY);
  // filsl map with 0
  dungeon.prepareMap();
  // gets the map from the Dungeons object
  let map = dungeon.getMap();

  let room = new Rooms(Util.getRandomNumber(0,sizeX),Util.getRandomNumber(0,sizeY),Util.getRandomNumber(3,sizeX),Util.getRandomNumber(3,sizeY));
  room.validateRoom(map);

  // clears terminal input
  // dosn't work well on mac
  //console.log('\033[2J');
  renderMap(map);
}();
