document.querySelector('input[type="button"]').addEventListener('click', check)
var result = document.querySelector('#result')

// genereaza un numar aleatoriu intre 0 si 100
var chosenNumber = Math.round(Math.random() * 100)

function check() {
    // value reprezinta valoarea data in input
    let checkedNumber = document.querySelector('#number').value

    if (chosenNumber == checkedNumber) {
        result.innerText = 'Ai ghicit!'
    } else if (chosenNumber > checkedNumber) {
        result.innerText = 'Prea mic'
    } else {
        result.innerText = 'Prea mare'
    }
}