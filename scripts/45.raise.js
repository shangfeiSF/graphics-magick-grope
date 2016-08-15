#!/usr/bin/env node
var common = require('./00.common')
var gm = require('gm')

function Raise(images) {
  var images = common.prepare(images)

  gm(images.src[0])
    .raise(10, 14)
    .write(images.dst[0], function () {
      common.log.apply(this, arguments)
    })
}

new Raise({
  src: ['original.png'],
  dst: ['45.raise.jpg']
})