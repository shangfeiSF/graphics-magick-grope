#!/usr/bin/env node
var common = require('./00.common')
var gm = require('gm')

function Thumbnail(images) {
  var images = common.prepare(images)

  gm(images.src[0])
    .thumbnail(150, 150)
    .write(images.dst[0], function () {
      common.log.apply(this, arguments)
    })
}

new Thumbnail({
  src: ['original.jpg'],
  dst: ['60.thumbnail.jpg']
})