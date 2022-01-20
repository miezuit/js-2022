var date = new Date()
var hour = date.getHours()

// daca e dimineata atunci scriu 'Buna dimineata'!
// dimineata = ora pana in 12
// altfel daca este pranz scriu 'Pofta buna!'
// daca este dupa-amiaza scriu 'Buna ziua!'
// daca este seara scriu 'Buna seara!'
// daca este noapte scriu 'Noapte buna!'

var startOfNight = 22

if (hour < 4) {
    document.write('Noapte buna!')
} else if (hour < 12) {
    document.write('Buna dimineata!')
} else if (hour == 12) {
    document.write('Pofta buna!')
} else if (hour < 17) {
    document.write('Buna ziua!')
} else if (hour < startOfNight) {
    document.write('Buna seara!')
} else {
    document.write('Noapte buna!')
}

// solutie alternativa:
var startOfNight = 22
var endOfNight = 4
var isNight = hour > startOfNight && hour < endOfNight
if (isNight) {
    document.write('Noapte buna!')
}

