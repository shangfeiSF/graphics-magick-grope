#!/usr/bin/env node
var common = require('./00.common')
var gm = require('gm')

function Swirl(images) {
  var images = common.prepare(images)

  gm(images.src[0])
    .swirl(90) // degrees
    .write(images.dst[0], function () {
      common.log.apply(this, arguments)
    })
}

new Swirl({
  src: ['original.png'],
  dst: ['57.swirl.png']
})