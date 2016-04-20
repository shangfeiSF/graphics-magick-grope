#!/usr/bin/env node
var gm = require('gm')
var common = require('./00.common')

function Colorize(images) {
  var images = common.prepare(images)

  gm(images.src[0])
    .colorize(80, 0, 30)
    .write(images.dst[0], function () {
      common.log.apply(this, arguments)
    })
}

new Colorize({
  src: ['original.png'],
  dst: ['08.colorize.jpg']
})
