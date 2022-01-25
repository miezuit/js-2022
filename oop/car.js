var car = {
    make: 'Chevy',
    model: 'Bel Air',
    year: 1957,
    color: 'red',
    batteryCapacity: 100,
    averageConsumption: 8,
    batteryCharge: 100,
    drive: function (distance) {
        this.batteryCharge -= 8 * distance / 100
        document.write('Driving car')
    },
    fullCharge: function () {
        this.batteryCharge = this.batteryCapacity
    },
    paint: function (color) {
        this.color = color
    }
}

document.write('The color is ' + car.color + '<br>')
car.paint('blue')
document.write('The color is ' + car.color + '<br>')
car.drive(300)
document.write('Charge: ' + car.batteryCharge + '<br>')
car.fullCharge()
document.write('Charge: ' + car.batteryCharge + '<br>')