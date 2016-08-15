#!/usr/bin/env node
var common = require('./00.common')
var gm = require('gm')

function Resample(images) {
  var images = common.prepare(images)

  gm(images.src[0])
    .resample(420, 120)
    .write(images.dst[0], function () {
      common.log.apply(this, arguments)
    })
}

new Resample({
  src: ['original.png'],
  dst: ['47.resample.jpg']
})