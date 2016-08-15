#!/usr/bin/env node
var common = require('./00.common')
var gm = require('gm')

function Resize(images) {
  var images = common.prepare(images)

  gm(images.src[0])
    .resize(58, 50, '%')
    .write(images.dst[0], function () {
      common.log.apply(this, arguments)
    })
}

new Resize({
  src: ['original.png'],
  dst: ['48.resize.jpg']
})