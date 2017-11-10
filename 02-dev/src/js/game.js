
// to do:
// * hacer que se acomoden random al cargar el sitio
// * hacer que la carta se muestre

// var deck = document.getElementById('deck').children

// var myArray = [
//   'Apples',
//   'Bananas',
//   'Pears'
// ]

// var randomItem = myArray[Math.floor(Math.random() * myArray.length)]

// document.body.innerHTML = randomItem

// var clikedCard = function clikedCard () {
//   var deck = document.getElementById('deck')
//   var cards = deck.children
//   // console.log(cards.length)
//   for (let index = 0; index < cards.length; index++) {
//     var cardsId = cards[index].id
//     // console.log(cardsId)
//     var card = document.getElementById(cardsId)
//     card.addEventListener('click', function () {
//       this.classList.add('front')
//     })
//   }
// }
// clikedCard()

// var pepe = 1
var deck = document.getElementById('deck')
var cards = deck.children
var idName = 'card'

var randomCards = function randomCards () {
  console.log(cards[0].id)
}

randomCards()
