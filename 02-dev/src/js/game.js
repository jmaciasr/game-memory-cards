const hiddenCard = document.getElementsByClassName('card');
const cards = document.getElementById('cards');
const currentScore = document.getElementById('currentScore');
const deck = ['c1-mobile.png', 'c2-mobile.png', 'c3-mobile.png', 'c4-mobile.png', 'c5-mobile.png', 'c6-mobile.png', 'c7-mobile.png', 'c8-mobile.png', 'c9-mobile.png', 'c10-mobile.png'];
let fulldeck;
let randomDeck;
let card;
let backCard;
let clickedCards = 0;
let previus;
let current;
let previusId;
let currentId;
let score = 0;

function doubleDeck() {
  fulldeck = deck.concat(deck);
  return fulldeck;
}

doubleDeck();

function stirDeck() {
  randomDeck = fulldeck.sort(() => { return 0.5 - Math.random(); });
  return randomDeck;
}

stirDeck();

function printCards() {
  for (let i = 0; i < randomDeck.length; i += 1) {
    backCard = document.createElement('div');
    backCard.classList.add('back-card');
    backCard.addEventListener('click', showCard);
    // backCard.addEventListener('click', checkPunish);
    card = document.createElement('img');
    card.src = `img/${randomDeck[i]}`;
    card.classList.add('card');
    backCard.appendChild(card);
    cards.appendChild(backCard);
  }
}

printCards();

function hiddenCards() {
  for (let i = 0; i < hiddenCard.length; i += 1) {
    hiddenCard[i].classList.add('card--hidden');
    hiddenCard[i].setAttribute('id', `card${i}`);
    hiddenCard[i].dataset.clicked = false;
  }
}

window.setTimeout(hiddenCards, 3000);

function showCard(element) {
  if (clickedCards === 2) {
    return true;
  }
  const currentEle = element.target;
  const currentCard = currentEle.childNodes;
  if (currentEle.getAttribute('data-clicked')) {
    alert('you need to click other card');
  }
  if (currentCard[0] !== undefined) {
    currentCard[0].classList.remove('card--hidden');
    currentCard[0].dataset.clicked = true;
    clickedCards += 1;
    previus = current;
    current = currentCard[0].src;
    previusId = currentId;
    currentId = currentCard[0].id;
  }
  if (previus === current) {
    score += 100;
    currentScore.textContent = score;
    clickedCards = 0;
    const id1 = document.getElementById(previusId);
    id1.parentNode.classList.add('back-card--match');
    id1.parentNode.removeEventListener('click', showCard, false);
    const id2 = document.getElementById(currentId);
    id2.parentNode.classList.add('back-card--match');
    id2.parentNode.removeEventListener('click', showCard, false);
    window.setTimeout(hiddenCards, 400);
  } else if (previus !== current && clickedCards === 2) {
    clickedCards = 0;
    current = '';
    previusId = '';
    window.setTimeout(hiddenCards, 400);
  }
}
// let punish = []
// function checkPunish(element) {
//   let currentPunish = element.target;
//   console.log(currentPunish.parentNode);
//   punish.push(currentPunish.parentNode);
//   console.log(punish);
//   // for (let i = 0; i < punish.length; i++) {
//   //  punish[i].push()
//   // }
// }
