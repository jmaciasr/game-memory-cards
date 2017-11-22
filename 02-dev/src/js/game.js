var cards = document.getElementById('cards')
var deck = ['c1-mobile.png', 'c2-mobile.png', 'c3-mobile.png', 'c4-mobile.png', 'c5-mobile.png', 'c6-mobile.png', 'c7-mobile.png', 'c8-mobile.png', 'c9-mobile.png', 'c10-mobile.png']
var fulldeck
var randomDeck
var card

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
  for (var i = 0; i < randomDeck.length; i++) {
    card = document.createElement('img')
    card.src = 'img/' + randomDeck[i]
    cards.appendChild(card)
  }
}

printCards()

function hiddenCards () {
  console.log('yeih')
}

window.setTimeout(hiddenCards, 100)
