const screenshot = require('screenshot-desktop')
const fs = require('fs')

screenshot({format: 'png'}).then((img) => {
  // img: Buffer filled with png goodness
  fs.writeFileSync('./image.png', img)
}).catch((err) => {
  console.log(err)
})