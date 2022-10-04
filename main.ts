input.onButtonPressed(Button.A, function () {
    if (var1 > 0 && var2 > 0) {
        basic.showString("both numbers are positive")
    } else if (var1 > 0 || var2 > 0) {
        basic.showString("at least one number is positive")
    } else {
        basic.showString("none of the numbers are positive")
    }
})
input.onButtonPressed(Button.B, function () {
    if (!(false)) {
        basic.showIcon(IconNames.Yes)
    }
})
let var2 = 0
let var1 = 0
var1 = -1
var2 = 4
