#!/usr/bin/env node
var common = require('./00.common')
var gm = require('gm')

function New(images) {
  var images = common.prepare(images)

  gm(525, 110, "#00ff55aa")
    .fontSize(68)
    .stroke("#efe", 2)
    .fill("#555")
    .drawText(20, 72, "graphics")
    .fill("#fa0")
    .drawText(274, 72, " magick")
    .write(images.dst[0], function (err) {
      common.log.apply(this, arguments)
    })
}

new New({
  dst: ['40.new.jpg']
})
