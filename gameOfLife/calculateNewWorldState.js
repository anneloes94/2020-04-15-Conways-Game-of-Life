const { getNumberOfNeighbours, times, initWorld } = require('./utils')
const { ON, OFF, ROW_SIZE, COL_SIZE } = require('./constants')

// PLAN: to layer new world on old world

function calculateNewWorldState(oldWorld) {
  // we start a new world with null state
  const newWorld = initWorld(null)
  const rules = [

    //RULE 1. any live cell with 2/3 neighbours survives
    (row, col) => {
      // don't work with dead cells
      const currState = oldWorld[row][col]
      if (currState === OFF) {
        return;
      }
      const numberOfNeighbours = getNumberOfNeighbours(world, row, col)
      // if equal to 2 or 3
      if (numberOfNeighbours === 3 || numberOfNeighbours === 4) {
        world[row][col] = ON;
      }
    },

    // RULE 2. dead cell with three live neighbours becomes a live cell
    (row, col) => {
      // don't work with live cells
      const currState = world[row][col]
      if (currState === ON) {
        return;
      }
    }
  ]

    // process the rules
  times(ROW_SIZE, row => {
    times(COL_SIZE, col => {
      rules.forEach(rule =>{
        rule(row, col)
      })
    })
  })

  return newWorld;
}


console.log(world)
calculateNewWorldState()
console.log(world)


exports.calculateNewWorldState = calculateNewWorldState