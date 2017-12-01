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
  }
}

window.setTimeout(hiddenCards, 1000)

let clickCard1
let clickCard2
let accountant = 0

function showCard (element) {
  let currentEle = element.target
  let currentCard = currentEle.childNodes
  console.log(currentCard[0].id)
  currentCard[0].classList.remove('card--hidden')

  if (accountant === 0) {
    clickCard1 = currentCard[0]
    accountant = 1
  } else if (accountant === 1) {
    clickCard2 = currentCard[0]
  }
}

document.addEventListener('click', showCard)
