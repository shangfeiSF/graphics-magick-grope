#!/usr/bin/env node
var common = require('./00.common')
var gm = require('gm')

function Roll(images) {
  var images = common.prepare(images)

  gm(images.src[0])
    .roll(40, -100)
    .quality(100)
    .write(images.dst[0], function () {
      common.log.apply(this, arguments)
    })
}

new Roll({
  src: ['original.png'],
  dst: ['49.roll.png']
})

