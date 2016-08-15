#!/usr/bin/env node
var common = require('./00.common')
var gm = require('gm')

function Paint(images) {
  var images = common.prepare(images)

  gm(images.src[0])
    .paint(2)
    .write(images.dst[0], function () {
      common.log.apply(this, arguments)
    })
}

new Paint({
  src: ['original.png'],
  dst: ['43.paint.jpg']
})