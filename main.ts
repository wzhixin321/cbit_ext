basic.forever(function () {
    cbit_显示类.RGB(
    AnalogPin.P0,
    AnalogPin.P1,
    AnalogPin.P2,
    255,
    0,
    0
    )
    basic.pause(500)
    cbit_显示类.RGB(
    AnalogPin.P0,
    AnalogPin.P1,
    AnalogPin.P2,
    0,
    255,
    0
    )
    basic.pause(500)
    cbit_显示类.RGB(
    AnalogPin.P0,
    AnalogPin.P1,
    AnalogPin.P2,
    0,
    0,
    255
    )
    basic.pause(500)
    cbit_显示类.RGB(
    AnalogPin.P0,
    AnalogPin.P1,
    AnalogPin.P2,
    255,
    0,
    255
    )
})
