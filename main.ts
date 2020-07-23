let direction = 1
let pos_x = 0
let pos_y = 2
led.plot(pos_x, pos_y)
basic.forever(function () {
    if (led.point(pos_x, pos_y)) {
        led.plot(pos_x + direction, pos_y + 1)
        led.plotBrightness(pos_x, pos_y, 170)
    } else {
        led.unplot(0, 0)
        led.plot(pos_x - 1, pos_y - 1)
    }
})
