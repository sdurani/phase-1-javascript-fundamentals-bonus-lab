// Instruction #1 Solution
const username = 'alice123';

// Instruction #2 Solution
const password = 'flatironschool';

// Instruction #3 Solution
let isAuthorized
if(username === 'alice123' && password === 'flatironschool') {
    isAuthorized = true
}
else {isAuthorized = false}

// Instruction #4 Solution
const loginValidationPhrase = isAuthorized === true ? "Welcome " + username + "!" : "Invalid username or password!"


// Instruction #5 Solution
const randomNumber = Math.floor(Math.random() * 10) + 1

// Instruction #6 Solution
const luckyNumberPhrase = `Your lucky number is ${randomNumber}!`

//git add .
// git commit -m "Added solution code"
// git push origin main:071524_solution