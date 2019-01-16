let fruits = [
	'Banana',
	'Orange',
	'Apple',
	'Mango',
	'Pineapple',
	'Pear',
	'Strawberry'
];

//Accesing array items
console.log(`First item of fruits[] is: ${fruits[0]}`);
console.log(`Last item if fruits[] is: ${fruits[fruits.length - 1]}`);

//Looping through array
function arrayLoop() {
	for (let i = 0; i < fruits.length; i++) {
		console.log(`Fruit at index ${i}: ${fruits[i]}`);
	}
}

//... using forEach() function
function forEachLoop() {
	let newFruits = fruits.forEach(function(fruit) {
		return fruit.toUpperCase();
	});
	console.log(`New Fruits array now contains: ${newFruits}`);
}

//... using map() function
function mapLoop() {
	let newFruits = fruits.map(function(fruit) {
		return fruit.toLowerCase();
	});
	console.log(`New Fruits array now contains: ${newFruits}`);
}

//Filtering array
function filterArray() {
	let filteredFruits = fruits.filter(function(fruit) {
		return fruit.substring(0, 1) === 'A';
	});
	console.log(`Filtered fruits contain: ${filteredFruits}`);
}

arrayLoop();
forEachLoop();
mapLoop();
filterArray();




const exerciseArray = ['Tom', 'Hilda', 'Zoe', 'Bart', 'George', 'Phil', 'Kate'];
//1. Use one of the loops above, to create an array containing names ending with "e" letter;

//2. Use one of the loops above, to create an array of names which indexes are even;