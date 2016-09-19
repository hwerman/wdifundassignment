var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*if (cardOne === cardTwo) {
	alert ('You found a match!');
}
else {
	alert ('Sorry, try again.');
}
*/

var gamebrd = document.getElementById('gameboard');

function createBoard(){
	for (var i=0; i<cards.length; i++) {
	var cardElement = document.createElement('div');

	cardElement.className = 'card';
	gamebrd.appendChild (cardElement);
}

}
createBoard();

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

cardElement.setAttribute('data-card', cards[i]);

cardElement.addEventListener('click', isTwoCards);

function isMatch() {
	/*need to add a function*/

}

function isTwoCards(){
	cardsInPlay.push(this.getAttribute('data-card'));

	if(cardsInPlay.length ===2) {
		isMatch(cardsInPlay);
		cardsInPlay =[];
	}
}