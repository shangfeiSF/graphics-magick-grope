#!/usr/bin/env node
var common = require('./00.common')
var gm = require('gm')

function Quality(images) {
  var images = common.prepare(images)

  gm(images.src[0])
    .quality(90)
    .write(images.dst[0], function () {
      common.log.apply(this, arguments)
    })
}

new Quality({
  src: ['original.png'],
  dst: ['44.quality.jpg']
})