const { ROW_SIZE, COL_SIZE, OFF} = require()
const { renderer } = require('./renderer')
const calculateNewWorldState = require('./calculateNewWorldState')

// set world
const world = initWorld(OFF)

// draw a glider
draw(world, 3, 4)
draw(world, 4, 5)
draw(world, 5, 5)
draw(world, 5, 4)
draw(world, 5, 3)

// start
world = calculateNewWorldState(world)
renderer(world)






