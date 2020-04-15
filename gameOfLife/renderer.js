const { times } = require('./utils')
const { ON, OFF, ROW_SIZE, COL_SIZE } = require('./constants')

const LAYOUT = {
  [ON]: "# ",
  [OFF]: ". ",
  default: "? "

}

function renderer(world) {
  let string = '';

  times(ROW_SIZE, row => {
    times(COL_SIZE, col => {
      // get me the value
      const value = world[row][col];
      // then get me the layout of that value
      const layout = LAYOUT[value] || LAYOUT.default
      string += layout
    });
    string += '\n'

    console.log(string)
  })
  
  console.log(string)
}

exports.renderer = renderer