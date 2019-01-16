function forLoop() {
	const MAX_TRIES = 10;

	for (let i = 0; i <= MAX_TRIES; i++) {
		console.log(`For loop try: ${i}`);
	}
}

function whileLoop() {
	let CURRENT_TRY = 1;
	const MAX_TRIES = 10;

	while (CURRENT_TRY <= MAX_TRIES) {
		console.log(`Current whileLoop attempt: ${CURRENT_TRY}`);
		CURRENT_TRY++;
	}
}

function doWhileLoop() {
	let CURRENT_TRY = 1;
	const MAX_TRIES = 10;

	do {
		console.log(`Current do/while loop attempt: ${CURRENT_TRY}`);
	} while (CURRENT_TRY++ <= MAX_TRIES);
}

forLoop();
whileLoop();
doWhileLoop();


//1. Create a program which iterates the integers from 1 to 100. 
//But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
//For numbers which are multiples of both three and five print "FizzBuzz".


//2. Create a loop inside which you will print 