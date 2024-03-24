let zufall = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    zufall = randint(0, 2)
    if (zufall == 0) {
        basic.showLeds(`
            . . . . #
            # # . # .
            . . # . .
            # # . # .
            . . . . #
            `)
    } else if (zufall == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    }
})
basic.forever(function () {
	
})
