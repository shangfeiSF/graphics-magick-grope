#!/usr/bin/env node
var common = require('./00.common')
var gm = require('gm')

function Region(images) {
  var images = common.prepare(images)

  gm(images.src[0])
    .region(130, 170, 307, 00)
    .charcoal(1)
    .write(images.dst[0], function () {
      common.log.apply(this, arguments)
    })
}

new Region({
  src: ['original.png'],
  dst: ['46.region.jpg']
})