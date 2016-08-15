#!/usr/bin/env node
var fs = require('fs')
var common = require('./00.common')
var gm = require('gm')

function SourceBuffer(images) {
  var images = common.prepare(images)

  gm(fs.readFileSync(images.src[0]))
    .noise('laplacian')
    .write(images.dst[0], function () {
      common.log.apply(this, arguments)
    })
}

new SourceBuffer({
  src: ['original.jpg'],
  dst: ['55.fromBuffer.png']
})