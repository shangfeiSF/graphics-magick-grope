#!/usr/bin/env node
var common = require('./00.common')
var gm = require('gm')

function Noise1(images) {
  var images = common.prepare(images)

  gm(images.src[0])
    .noise(0.3)
    .write(images.dst[0], function () {
      common.log.apply(this, arguments)
    })
}

new Noise1({
  src: ['original.png'],
  dst: ['41.noise1.jpg']
})