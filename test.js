const glob = require('glob')

const moveArrItem = (arr, elem, index) =>
  [elem].concat(arr.filter(x => x !== elem))

const result = moveArrItem(glob.sync('./app/**/*.js'), './app/app.module.js', 0)
console.log(result)
