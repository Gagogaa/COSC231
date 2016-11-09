function Game(table){

  var _grid = [],
      _playerPos = [0, 0],
      _width,
      _height,
      _hiScore,
      _Score, // number of fires put out
      _water = 0,
      _timer,
      _move,
      _draw = new Draw(table),
      obj = {
        move: move,
        start: start
      };

// Loads the highscore in from a cookie
// Layout the grid
  function start(){
    _height = document.querySelectorAll("#" + table + " tr").length;
    _width = document.querySelectorAll("#" + table + " td").length / _height;
    for (var i = 0; i < _height; i++) {
      _grid.push([]);
      for (var j = 0; j < _width; j++) {
        _grid[i][j] = "g";
      }
    }
    //console.log(_grid.join('\n'));
    //console.log(_grid);
    //setInterval(gameTick, 100);
  }

// randomly spawn fires and spawn water when nessisary
  function gameTick(){
    gameCheck();
    _draw.draw(_grid, _playerPos);
  }

// Checks to see if two items are overlapping and takes the nessisary action
  function gameCheck(){
    if(_grid[_playerPos[0]][_playerPos[1]] === "f"){
    }else if(_grid[_playerPos[0]][_playerPos[1]] === "w"){

    }
  }

// Spawns a fire randomly in the room
  function spawnFire(){

  }

// Spawns water randomly in the room
  function spawnWater(){

  }

// ends the game setting the highscore in a cookie
  function gameOver(){

  }

  function move(dir){
    switch (dir) {
      case 119: //w
        if(_playerPos[1] > 0){
          _playerPos[1] = _playerPos[1] -1;
        }
        break;

      case 97: //a
        if(_playerPos[1] > 0){
          _playerPos[1] = _playerPos[1] -1;
        }
        break;

      case 115: //s
        if(_playerPos[1] > 0){
          _playerPos[1] = _playerPos[1] +1;
        }
        break;

      case 100: //d
        if(_playerPos[1] > 0){
          _playerPos[1] = _playerPos[1] -1;
        }
        break;
    }
    gameCheck();
  }
  return obj;
}





















function Draw(){
  var obj = {
    draw: draw
  }

  function draw(worldArray, playerPosArray){
    worldArray[playerPosArray[0]][playerPosArray[1]] = "p";
    console.log(worldArray.join('\n'));

  }

  return obj;
}
