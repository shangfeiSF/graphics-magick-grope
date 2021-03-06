#!/usr/bin/env node
var common = require('./00.common')
var gm = require('gm')

function Cycle(images) {
  var images = common.prepare(images)

  gm(images.src[0])
    .cycle(4)
    .write(images.dst[0], function () {
      common.log.apply(this, arguments)
    })
}

new Cycle({
  src: ['original.png'],
  dst: ['14.cycle.jpg']
})