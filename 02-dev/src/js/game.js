let cards = document.getElementById('cards')
let currentScore = document.getElementById('currentScore')
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
    backCard.addEventListener('click', showCard)
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

window.setTimeout(hiddenCards, 3000)

let clickedCards = 0
let previus
let current
let previusId
let currentId
let score = 0
function showCard (element) {
  if (clickedCards === 2) {
    return true
  }
  let currentEle = element.target
  let currentCard = currentEle.childNodes
  if (currentEle.getAttribute('data-clicked')) {
    alert('you need click other card')
  }
  if (currentCard[0] !== undefined) {
    currentCard[0].classList.remove('card--hidden')
    currentCard[0].dataset.clicked = true
    clickedCards++
    previus = current
    current = currentCard[0].src
    previusId = currentId
    currentId = currentCard[0].id
  }
  if (previus === current) {
    score = score + 100
    currentScore.textContent = score
    clickedCards = 0
    let id1 = document.getElementById(previusId)
    id1.parentNode.classList.add('back-card--match')
    id1.parentNode.removeEventListener('click', showCard, false)
    let id2 = document.getElementById(currentId)
    id2.parentNode.classList.add('back-card--match')
    id2.parentNode.removeEventListener('click', showCard, false)
    window.setTimeout(hiddenCards, 400)
  } else if (previus !== current && clickedCards === 2) {
    clickedCards = 0
    current = undefined
    previusId = undefined
    window.setTimeout(hiddenCards, 400)
  }
}

