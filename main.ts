radio.onReceivedNumber(function (receivedNumber) {
    dado2 = randint(0, 10)
    basic.showNumber(0)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    dado = [0, 9]
    basic.showNumber(dado)
})
let dado: number[] = []
let dado2 = 0
radio.setGroup(1)
basic.forever(function () {
	
})
