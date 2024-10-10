let suspectsArray = [];
let weaponsArray = [];
let roomsArray = [];
resetAll();

let mystery = null;

let message = document.getElementById("message");

function cardCount() {
	let suspectCards = document.getElementById("suspectCount");
	suspectCards.textContent = suspectsArray.length;

	let weaponCards = document.getElementById("weaponCount");
	weaponCards.textContent = weaponsArray.length;

	let roomCards = document.getElementById("roomCount");
	roomCards.textContent = roomsArray.length;
}

function resetSuspects() {
	suspectsArray = ["Dr. Orchid", "Professor Plum", "Mr. Green", "Mr. Peacock", "Ms. Scarlet", "Colonel Mustard"];
	cardCount();
}

function resetWeapons() {
	weaponsArray = ["Gun", "Knife", "Rope", "Wrench", "Candlestick", "Lead Pipe", "Baseball Bat", "Chainsaw"];
	cardCount();
}

function resetRooms() {
	roomsArray = ["Hall", "Lounge", "Dining Room", "Kitchen", "Ballroom", "Conservatory", "Billiard Room", "Library", "Study", "Bathroom"];
	cardCount();
}

function resetAll() {
	resetSuspects();
	resetWeapons();
	resetRooms();
}

function selectRandom(array) {
	let i = Math.floor(Math.random() * array.length);
	return i;
}

function pickMystery() {
	let mystery = {
		suspect: suspectsArray.splice(selectRandom(suspectsArray), 1),
		weapon: weaponsArray.splice(selectRandom(weaponsArray), 1),
		room: roomsArray.splice(selectRandom(roomsArray), 1)
	};
	cardCount();
	return mystery;
}

function createMystery() {
	let a = 0;
	let b = 0;
	let c = 0;

	if(suspectsArray.length == 0) {
		a = 1;
	}
	if(weaponsArray.length == 0) {
		b = 2;
	}
	if(roomsArray.length == 0) {
		c = 4;
	}

	let d = a + b + c;

	switch (d) {
		case 0:
			mystery = pickMystery();
			message.textContent = "Mystery Created!";
			break;
		case 1:
			message.textContent = "Suspect deck is empty!";
			break;
		case 2:
			message.textContent = "Weapon deck is empty!";
			break;
		case 3:
			message.textContent = "Suspect deck and weapon deck are empty!";
			break;
		case 4:
			message.textContent = "Room deck is empty!";
			break;
		case 5:
			message.textContent = "Suspect deck and room deck are empty!";
			break;
		case 6:
			message.textContent = "Weapon deck and room deck are empty!";
			break;
		case 7:
			message.textContent = "All decks are empty!";
			break;
		default:
			alert("Error");
	}
}

function revealMystery(mystery) {
	if (mystery) {
		message.textContent = `${mystery.suspect} killed Mr. Marist using the ${mystery.weapon} in the ${mystery.room}!`;
	}
	else {
		message.textContent = "Please create a mystery first";
	}
}