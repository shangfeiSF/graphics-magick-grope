#!/usr/bin/env node
var common = require('./00.common')
var gm = require('gm')

function ThumbExact(images) {
  var images = common.prepare(images)

  gm(images.src[0])
    .thumbExact(150, 50, images.dst[0], function () {
      common.log.apply(this, arguments)
    })
}

new ThumbExact({
  src: ['original.jpg'],
  dst: ['59.thumbExact.jpg']
})