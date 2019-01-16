const fs = require('fs');
const FILE_PATH = './text_file.txt';

function sync() {
    console.log('1. This is synchronous code\n');
}

function async() {
    setTimeout(function() {
        console.log('2. This should be first?\n ');
    }, 1000);
    console.log('3. This should be last?\n');
}

function getTextFromFile(filePath, cb) {
    if (typeof cb !== 'function') {
        return 'You have to pass a callback function as a second argument!';
    }
    return fileExists(filePath, cb);
}

function getTextFromFilePromise(filePath) {
    return new Promise(function(resolve, reject) {
        return fileExistsPromise(filePath, resolve, reject);
    });
}

async function getTextFromFileAsync(filePath) {
    const fileData = await getTextFromFilePromise(filePath);
    console.log('This is result of async/await function: ', fileData);
}

function fileExists(filePath, cb) {
    if (typeof cb !== 'function') {
        return 'You have to pass a callback function as a second argument!';
    }

    if (typeof filePath !== 'string' || filePath.length <= 0) {
        return cb('File path must be a non empty string!');
    }

    fs.exists(filePath, function(isExisting) {
        if (isExisting) {
            fs.readFile(filePath, 'utf-8', function(err, data) {
                if (err) {
                    return cb(err);
                }
                return cb(data);
            });
        } else {
            return cb('File doesn`t exist!');
        }
    });
}

function fileExistsPromise(filePath, resolve, reject) {
    if (typeof filePath !== 'string' || filePath.length <= 0) {
        return 'File path must be a non empty string!';
    }

    fs.exists(filePath, function(isExisting) {
        if (isExisting) {
            fs.readFile(filePath, 'utf-8', function(err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        } else {
            reject('File doesn`t exist!');
        }
    });
}

//This should be simple, but...
sync();

//What will happen? Which text will be logged first?
async();

//What will happen? What value will be the string variable?
let string = getTextFromFile(FILE_PATH, function(data) {
    return data;
});
console.log(`This won\`t work...: ${string}\n`);

getTextFromFile(FILE_PATH, function(data) {
    console.log(`This works!: ${data}\n`);
});

//Getting text from file using promise based function
const fileData = getTextFromFilePromise(FILE_PATH); //This won`t work as intended...
console.log(`This won\`t work..: ${fileData}\n`);

//This will :)
getTextFromFilePromise(FILE_PATH).then(function(text) {
    console.log(`Promise getText: ${text}\n`);
});

//Somehow we can skip using .then()!
getTextFromFileAsync(FILE_PATH);
