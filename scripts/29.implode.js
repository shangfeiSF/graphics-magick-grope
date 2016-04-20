#!/usr/bin/env node
var common = require('./00.common')
var gm = require('gm')

function Implode(images) {
  var images = common.prepare(images)

  gm(images.src[0])
    .implode(0.8)
    .write(images.dst[0], function () {
      common.log.apply(this, arguments)
    })
}

new Implode({
  src: ['original.png'],
  dst: ['29.implode.jpg']
})