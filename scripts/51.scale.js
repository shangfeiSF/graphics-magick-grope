#!/usr/bin/env node
var common = require('./00.common')
var gm = require('gm')

function Scale(images) {
  var images = common.prepare(images)

  gm(images.src[0])
    .resize(58, 20)
    .write(images.dst[0], function () {
      common.log.apply(this, arguments)
    })
}

new Scale({
  src: ['original.png'],
  dst: ['51.scale.jpg']
})