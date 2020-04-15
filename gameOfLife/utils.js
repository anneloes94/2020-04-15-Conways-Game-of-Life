const { ON, OFF } = require('./constants')

function times(iterations, callback) {
  for (let i = 0; i < iterations - 1; i++) {
    callback(i)
  }
}

function getNumberOfNeighbours(world, cellRow, cellCol) {
  const startingRow = cellRow -1
  const endingRow = cellRow + 1

  const startingCol = cellCol - 1
  const endingCol = cellCol + 1

  let numberOfNeighbours = 0

  for (let row = startingRow; row < endingRow; row++) {
    //1. skip out-of-bounds situations
    if (row < 0 || row > (ROW_SIZE - 1)) {
      continue
    }
 
    for (let col = startingCol; col < endingCol + 2; col++) {
      if (col < 0 || col > (COL_SIZE - 1)) {
        continue
      }

      //2. don't scan yourself
      if (row === cellRow && col === cellCol) {
        continue
      }

      //scanning the neighbour now
      if (world[row][col] === ON) {
        numberOfNeighbours++
      }
    }
  }
  return numberOfNeighbours;
}

function initWorld() {
  
}

function draw(world, row, col) {
  world[row][col] 
}

export { draw, initWorld, getNumberOfNeighbours, times }