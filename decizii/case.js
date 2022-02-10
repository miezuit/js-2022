
var date = new Date()
var dayOfWeek = date.getDay()

document.write('Astazi este ')

switch (dayOfWeek) {
    case 1:
        document.write('luni')
        break
    case 2:
        document.write('marti')
        break;
    case 3:
        document.write('marti')
        break;
    case 4:
        document.write('joi')
        break
    case 6:
        document.write('sambata')
        break;
    case 7:
        document.write('duminica')
        break;
    default:
        document.write('necunoscuta')
        break
}

/*
// este echivalent cu:
if (dayOfWeek == 1) {
    document.write('luni')
} else if (dayOfWeek == 2) {
    document.write('marti')
} else if (dayOfWeek == 3) {
    document.write('miercuri')
} else if (dayOfWeek == 4) {
    document.write('joi')
} else if (dayOfWeek == 5) {
    document.write('vineri')
} else if (dayOfWeek == 6) {
    document.write('sambata')
} else {
    document.write('duminica')
}
*/


