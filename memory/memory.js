let animals = [
    'bear',
    'corgi',
    'crab',
    'fish',
    'panda',
    'parrot',
    'pig',
    'rabbit',
    'rhinoceros',
    'shark',
    'snail',
    'turtle'
]
let animalPairs = [...animals, ...animals]
let cards = shuffle(animalPairs)
let activeCard = null
let waitingToHideCards = false

function shuffle(array) {
    return array.sort(() => 0.5 - Math.random())
}

function displayAllCards() {
    cards.forEach(displayCard)
}

function displayCard(card) {
    let div = document.createElement('div')
    div.classList.add('card')
    let img = document.createElement('img')
    img.src = `https://raw.githubusercontent.com/miezuit/html-css-python/main/js/memory/img/icons8-${card}.png`
    div.appendChild(img)
    document.querySelector('#game').appendChild(div)
    div.addEventListener('click', showCard)
}

function showCard(event) {
    let card = event.target

    // cazul in care nu este niciun card activ
    if (!activeCard) {
        activeCard = card
        card.querySelector('img').style.visibility = 'visible'
    } else if (!waitingToHideCards) {
        card.querySelector('img').style.visibility = 'visible'
        if(cardsAreTheSame(activeCard, card)) {
            // cards are the same, keep the visible and remove listeners
            activeCard.removeEventListener('click', showCard)
            card.removeEventListener('click', showCard)
            activeCard = null
        } else {
            // cards are not the same
            // hide the cards after 2 seconds
            waitingToHideCards = true
            setTimeout(() => hideCards([activeCard, card]), 2000)
        }
    }
}

function cardsAreTheSame(card1, card2) {
    return card1.querySelector('img').src == card2.querySelector('img').src
}

function hideCards(cards) {
    cards.forEach(card => card.querySelector('img').style.visibility = 'hidden')
    activeCard = null
    waitingToHideCards = false
}

displayAllCards()
