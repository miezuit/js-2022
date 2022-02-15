const speed = 1000

document.querySelector('input').addEventListener('click', run)
document.addEventListener('keydown', pressLetter)

function randomNumber(max) {
    return Math.round(Math.random() * max)
}

function randomLetter() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let i = randomNumber(letters.length - 1)
    return letters[i]
}

function randomColor() {
    let red = randomNumber(255)
    let green = randomNumber(255)
    let blue = randomNumber(255)
    return `rgb(${red}, ${green}, ${blue})`
}

function randomLetterElement() {
    let div = document.createElement('div')
    div.innerText = randomLetter()
    div.style.backgroundColor = randomColor()
    div.style.top = randomNumber(99) + 'vh'
    div.style.left = randomNumber(99) + 'vw'
    div.classList.add('letter', div.innerText)
    document.querySelector('body').append(div)
}

async function run() {
    var gameOver = false
    hideStart()
    while(!gameOver) {
        randomLetterElement()
        await new Promise(r => setTimeout(r, speed))
    }
}

function hideStart() {
    document.querySelector('input').style.display = 'none'
}

function pressLetter(event) {
    let code = event.keyCode
    let letter = String.fromCharCode(code)
    // gaseste primul element cu clasa literei apasate
    let element = document.querySelector(`.${letter}`)
    // daca elementul exista (nu este null) atunci il stergem din html
    if (element) {
        element.remove()
    }
}

