let cards = document.getElementById('cards')
let deck = ['c1-mobile.png', 'c2-mobile.png', 'c3-mobile.png', 'c4-mobile.png', 'c5-mobile.png', 'c6-mobile.png', 'c7-mobile.png', 'c8-mobile.png', 'c9-mobile.png', 'c10-mobile.png']
let fulldeck
let randomDeck
let card
let backCard

function doubleDeck () {
  fulldeck = deck.concat(deck)
  return fulldeck
}

doubleDeck()

function stirDeck () {
  randomDeck = fulldeck.sort(function () { return 0.5 - Math.random() })
  return randomDeck
}

stirDeck()

function printCards () {
  for (let i = 0; i < randomDeck.length; i++) {
    backCard = document.createElement('div')
    backCard.classList.add('back-card')
    card = document.createElement('img')
    card.src = 'img/' + randomDeck[i]
    card.classList.add('card')
    backCard.appendChild(card)
    cards.appendChild(backCard)
  }
}

printCards()

function hiddenCards () {
  let hiddenCards = document.getElementsByClassName('card')
  for (let i = 0; i < hiddenCards.length; i++) {
    hiddenCards[i].classList.add('card--hidden')
    hiddenCards[i].setAttribute('id', 'card' + i)
    hiddenCards[i].dataset.clicked = false
  }
}

window.setTimeout(hiddenCards, 1000)

let clickedCards = 0
let previus
let current
let score = 0
function showCard (element) {
  if (clickedCards === 2) {
    return true
  }
  let currentEle = element.target
  let currentCard = currentEle.childNodes
  if (currentEle.getAttribute('data-clicked')) {
    alert('you need other card')
  }
  if (currentCard[0] !== undefined) {
    currentCard[0].classList.remove('card--hidden')    
    currentCard[0].dataset.clicked = true
    clickedCards++
    previus = current
    current = currentCard[0].src
  }
  if (previus === current) {
    score =+ 100 
    console.log(score)
  } else if (previus !== current && clickedCards === 2) {
    window.setTimeout(hiddenCards, 1000)
    clickedCards = 0
  }
}

document.addEventListener('click', showCard)
