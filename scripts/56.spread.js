#!/usr/bin/env node
var common = require('./00.common')
var gm = require('gm')

function Spread(images) {
  var images = common.prepare(images)

  gm(images.src[0])
    .spread(10)
    .write(images.dst[0], function () {
      common.log.apply(this, arguments)
    })
}

new Spread({
  src: ['original.png'],
  dst: ['56.spread.jpg']
})