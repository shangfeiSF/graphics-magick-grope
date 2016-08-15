#!/usr/bin/env node
var common = require('./00.common')
var gm = require('gm')

function Sepia(images) {
  var images = common.prepare(images)

  gm(images.src[0])
    .sepia()
    .write(images.dst[0], function () {
      common.log.apply(this, arguments)
    })
}

new Sepia({
  src: ['original.png'],
  dst: ['52.sepia.jpg']
})