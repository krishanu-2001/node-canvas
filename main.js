const { createCanvas } = require('canvas')
const fs = require('fs')

const width = 1200
const height = 600

const canvas = createCanvas(width, height)
const context = canvas.getContext('2d')

context.fillStyle = '#000'
context.fillRect(0, 0, width, height)

context.fillStyle = '#fff'
context.font = '30px Arial'
context.fillText('Tools', 600, 530)

const buffer = canvas.toBuffer('image/png')
fs.writeFileSync('./image.png', buffer)