#!/usr/bin/env node
var common = require('./00.common')
var gm = require('gm')

function Solarize(images) {
  var images = common.prepare(images)

  gm(images.src[0])
    .solarize(68.9)
    .write(images.dst[0], function () {
      common.log.apply(this, arguments)
    })
}

new Solarize({
  src: ['original.png'],
  dst: ['54.solarize.png']
})