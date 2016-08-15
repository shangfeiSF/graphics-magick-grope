#!/usr/bin/env node
var common = require('./00.common')
var gm = require('gm')

function Negative(images) {
  var images = common.prepare(images)

  gm(images.src[0])
    .negative()
    .write(images.dst[0], function () {
      common.log.apply(this, arguments)
    })
}

new Negative({
  src: ['original.png'],
  dst: ['39.negative.jpg']
})
