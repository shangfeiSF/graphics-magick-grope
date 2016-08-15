#!/usr/bin/env node
var common = require('./00.common')
var gm = require('gm')

function Rotate(images) {
  var images = common.prepare(images)

  gm(images.src[0])
    .rotate('red', -30)
    .write(images.dst[0], function () {
      common.log.apply(this, arguments)
    })
}

new Rotate({
  src: ['original.png'],
  dst: ['50.rotate.jpg']
})