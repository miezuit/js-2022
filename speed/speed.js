
function randomNumber(max) {
    return Math.round(Math.random() * max)
}

function randomLetter() {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
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
    div.classList.add('letter')
    document.querySelector('body').append(div)
}

async function run() {
    var gameOver = false
    hideStart()
    while(!gameOver) {
        randomLetterElement()
        await new Promise(r => setTimeout(r, 2000))
    }
}

function hideStart() {
    document.querySelector('input').style.display = 'none'
}

document.querySelector('input').addEventListener('click', run)

