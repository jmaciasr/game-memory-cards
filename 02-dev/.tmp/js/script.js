var deck = ['c1-mobile.png', 'c2-mobile.png', 'c3-mobile.png', 'c4-mobile.png', 'c5-mobile.png', 'c6-mobile.png', 'c7-mobile.png', 'c8-mobile.png', 'c9-mobile.png', 'c10-mobile.png'];
var fullDeck

function deckDouble() {
	fullDeck = deck.concat(deck)
	return fullDeck
}
deckDouble()

function random () {
	fullDeck.sort(
		function() {
			return Math.random() - 0.5
		}
	)
}
