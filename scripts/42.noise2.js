#!/usr/bin/env node
var common = require('./00.common')
var gm = require('gm')

function Noise2(images) {
  var images = common.prepare(images)

  gm(images.src[0])
    .noise("laplacian")
    .write(images.dst[0], function () {
      common.log.apply(this, arguments)
    })
}

new Noise2({
  src: ['original.png'],
  dst: ['42.noise2.jpg']
})


