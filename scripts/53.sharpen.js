#!/usr/bin/env node
var common = require('./00.common')
var gm = require('gm')

function Sharpen(images) {
  var images = common.prepare(images)

  gm(images.src[0])
    .sharpen(19, 10)
    .write(images.dst[0], function () {
      common.log.apply(this, arguments)
    })
}

new Sharpen({
  src: ['original.png'],
  dst: ['53.sharpen.jpg']
})