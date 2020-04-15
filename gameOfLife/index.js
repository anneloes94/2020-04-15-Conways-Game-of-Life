const { ROW_SIZE, COL_SIZE, OFF} = require('./constants')
const { renderer } = require('./renderer')
const calculateNewWorldState = require('./calculateNewWorldState')
const { initWorld } = require('./utils')

// set world
const world = initWorld(OFF)

// draw a glider
draw(world, 3, 4)
draw(world, 4, 5)
draw(world, 5, 5)
draw(world, 5, 4)
draw(world, 5, 3)

// start
const tick = () => {
  world = calculateNewWorldState(world)
  renderer(world)
}

while (true) {
  tick()
}





