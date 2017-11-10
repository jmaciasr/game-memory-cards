'use strict';

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
var deck = document.getElementById('deck');
var cards = deck.children;
var idName = 'card';

var randomCards = function randomCards() {
  console.log(cards[0].id);
};

randomCards();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuanMiXSwibmFtZXMiOlsiZGVjayIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYXJkcyIsImNoaWxkcmVuIiwiaWROYW1lIiwicmFuZG9tQ2FyZHMiLCJjb25zb2xlIiwibG9nIiwiaWQiXSwibWFwcGluZ3MiOiI7O0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUlBLE9BQU9DLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBWDtBQUNBLElBQUlDLFFBQVFILEtBQUtJLFFBQWpCO0FBQ0EsSUFBSUMsU0FBUyxNQUFiOztBQUVBLElBQUlDLGNBQWMsU0FBU0EsV0FBVCxHQUF3QjtBQUN4Q0MsVUFBUUMsR0FBUixDQUFZTCxNQUFNLENBQU4sRUFBU00sRUFBckI7QUFDRCxDQUZEOztBQUlBSCIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIHRvIGRvOlxuLy8gKiBoYWNlciBxdWUgc2UgYWNvbW9kZW4gcmFuZG9tIGFsIGNhcmdhciBlbCBzaXRpb1xuLy8gKiBoYWNlciBxdWUgbGEgY2FydGEgc2UgbXVlc3RyZVxuXG4vLyB2YXIgZGVjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWNrJykuY2hpbGRyZW5cblxuLy8gdmFyIG15QXJyYXkgPSBbXG4vLyAgICdBcHBsZXMnLFxuLy8gICAnQmFuYW5hcycsXG4vLyAgICdQZWFycydcbi8vIF1cblxuLy8gdmFyIHJhbmRvbUl0ZW0gPSBteUFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG15QXJyYXkubGVuZ3RoKV1cblxuLy8gZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSByYW5kb21JdGVtXG5cbi8vIHZhciBjbGlrZWRDYXJkID0gZnVuY3Rpb24gY2xpa2VkQ2FyZCAoKSB7XG4vLyAgIHZhciBkZWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlY2snKVxuLy8gICB2YXIgY2FyZHMgPSBkZWNrLmNoaWxkcmVuXG4vLyAgIC8vIGNvbnNvbGUubG9nKGNhcmRzLmxlbmd0aClcbi8vICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNhcmRzLmxlbmd0aDsgaW5kZXgrKykge1xuLy8gICAgIHZhciBjYXJkc0lkID0gY2FyZHNbaW5kZXhdLmlkXG4vLyAgICAgLy8gY29uc29sZS5sb2coY2FyZHNJZClcbi8vICAgICB2YXIgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhcmRzSWQpXG4vLyAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbi8vICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZnJvbnQnKVxuLy8gICAgIH0pXG4vLyAgIH1cbi8vIH1cbi8vIGNsaWtlZENhcmQoKVxuXG4vLyB2YXIgcGVwZSA9IDFcbnZhciBkZWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlY2snKVxudmFyIGNhcmRzID0gZGVjay5jaGlsZHJlblxudmFyIGlkTmFtZSA9ICdjYXJkJ1xuXG52YXIgcmFuZG9tQ2FyZHMgPSBmdW5jdGlvbiByYW5kb21DYXJkcyAoKSB7XG4gIGNvbnNvbGUubG9nKGNhcmRzWzBdLmlkKVxufVxuXG5yYW5kb21DYXJkcygpXG4iXX0=
