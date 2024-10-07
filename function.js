// FUNCTION
// Function are used to run sinppet code

// function declaration
function greeting() {
    console.log("Welcome to our app");
}

// invoked / called
greeting();
greeting();

function speak() {
    console.log("Hello class");
}
speak();

// function can take in parameters
function speacialGreeting(name = "user") {
    console.log(`${name}, Welcome to our app`);
}
speacialGreeting("Rahman");
speacialGreeting("Ola")

// default parameter
speacialGreeting();

// write a function that logs the addition of three numbers
function addTwoNums(num1, num2, num3) {
    const result = num1 + num2 + num3;
    console.log(result);
}
addTwoNums(1, 3, 5);
addTwoNums(-10, 7, 5);

function checkNum(num) {
    if (num > 0) {
        console.log(`${num} is Positive`);
    } else if (num < 0) {
        console.log(`${num} is Negative`); 
    } else {
        console.log("This is zero");
    }
}
checkNum(89);
checkNum(-89);
checkNum(0);

// Function expression
myFunction();
function myFunction() {
    console.log("This is a function declaration");
}

const myFunction2 = function () {
    console.log("This is a function expression");
}
myFunction2();

// hoisting - moves all the func declaration up the script

// return key word

// write a function that calculate the product of two nums

const productTwoNum = function (num1, num2) {
    return num1 * num2;
}
const result = productTwoNum(10, 5);
console.log(`The result is ${result}`);

// write a function that convert kilometer to meter
// 7km - 7 * 1000

const kmToMeters = function (value) {
    const meter = value * 1000
    return`${value}km is equal to ${meter}m`;
};
console.log(kmToMeters(6));
console.log(kmToMeters(9));


// write a function that calculate the average of three numbers and returns the average

const productOfThreeNum = function (num1, num2, num3) {
    const average = (num1 + num2 + num3) / 3;
    return average;
}
console.log(productOfThreeNum(5, 8, 9));


// write a function that calculate the year of user, your function should take in year of birth as a parameter

const userAge = function (yearOfBirth) {
    return 2024 - yearOfBirth;
}
console.log(userAge(1960))

// write a function that checks if a number is even or odd
function oddOrEven (num) {
    if (num % 2 == 0) {
        return "This is an even number"
    } else {
        return "This is an odd number"
    }
}
console.log(oddOrEven(100));


let saving = 10000;

function checkWithdrawal(amount) {
    if (amount < saving) {
        saving -= amount
        return `withdrawal  ${amount} is successful and my balance is ${saving}`
    } else {
        return `Insufficient funds`
    }
}
console.log(checkWithdrawal(6500));
console.log(checkWithdrawal(2000));

console.log(`my current saving is ${saving}`);

const depositeAmount = function (amount) {
    saving += amount;
    return`Deposit of ${amount} is succesful and your current balance is ${saving}`
}
console.log(depositeAmount(2000));
console.log(depositeAmount(5000));
console.log(checkWithdrawal(3000));


let balance = 30000
function withdrawal(amount2) {
    if (balance -= amount2) {
        return `Withdrawal ${amount2} is successful and main balance is ${balance}`
    } else {
        return`Insufficient funds`
    }
}
console.log(withdrawal(10000))
const Deposit = function (amount2) {
    balance += amount2
    return `Deposit of ${amount2} is successful and current balance is ${balance} `
}
console.log(Deposit(4000));
console.log(withdrawal(20000));

// Build a simple ATM 
let usersPin = 1234;
let saving = 40000;

//write a function that check the enteredPin

const checkPin = function (enteredPin) {
    if (enteredPin === usersPin) {
        return true;
    } else {
        return false;
    }
};
const withdraw = function (amount) {
    if (checkPin(1234)) {
        if (saving > amount) {
            saving -= amount
            console.log(`The withdrawal of ${amount} is successful and balance is ${saving}`);
        } else {
            console.log("Insfficient fund");
        }
    } else {
        console.log("Incorrect Pin");
        
    }
}

withdraw(2000);
withdraw(5000);


const depositAmount = function (amount) {
    if (checkPin(1234)) {
        saving += amount
        console.log(`Deposit of ${amount} is successful and balance is ${saving}`);
    } else {
        console.log("Incorrect Pin")
    }
};
depositAmount(3000)

// write a function that check balance
const balance = function () {
    if (checkPin(1234)) {
        console.log(`Current balance is ${saving}`)
    } else {
        console.log("incorrect pin, try again");
    }
}
balance();

// write a function that checks number of attempts
let attempt = 0
let block = false


const checkCardAttempts = function () {
    if (block) {
        console.log("Your card is blocked");
        return;
    }
    if (checkPin(7890)) {
        console.log("perform Transaction")
        attempt = 0;
    } else {
        if (attempt === 3) {
            console.log("your card is blocked")
            block = true;
        } else {
            console.log(`Incorrect pin ${3-attempt} attempts lefts `)
        }
    }
}
checkCardAttempts();
checkCardAttempts();
checkCardAttempts();
checkCardAttempts();

// write a function that check if an email is valid or not
// @

const emailCheck = function (value) {
    if (value.includes("@")) {
        console.log("Email is Valid");
    } else {
        console.log("Invalid email");
        
    }
}

// ARROW FUNCTION

const myFunction = (p1,p2) => {
    
}

// write an arrow function to check if a password is long enough (min password length 7)
// const passwordCheck = () => {
//     if (value .trim() .length>= 7) {
//         console.log("password is long enough");
//     } else {
//         console.log("Short password");
//     }
// }; 
const passwordCheck2 = (value) => value.length >= 7 ? "Password is long" : "Short password"
console.log(passwordCheck2("password"));


// passwordCheck("password");

// return keyword

// const calcAverage = (num1, num2) => {
//     return (num1 + num2) / 2;
// }

const calcAverage = (num1, num2) => (num1 + num2) / 2;

console.log(calcAverage(6, 7));

const kmToMetersAgain = (value) => `${value}km is equal to ${value * 1000}m`

console.log(kmToMetersAgain(8.5));


// Scoping Global Local

const globalVar = "EXAMPLE";
const num5 = 90;

const example = () => {
    console.log(globalVar);

    const myValue = 90;
    console.log(myValue);
}

const mySavings = 9000;

const seeBalance = () => {
    const mySavings = 1000;
    console.log(mySavings);
}
seeBalance();
console.log(mySavings);

const num = 8;
const func1 = () => {
    const num = 89;
    console.log(num);
}

const func2 = (num = 78) => {
    // const num = 12;
    console.log(num);
}
func2()
console.log(num);

//  write a function that takes in a string as a parameter and return the string in all capital letter
const fullName = (str) => str.toUpperCase();
console.log(fullName("hacker"));
// write a JavaScript function that accepts a string as a parameter and converts the first letter of the words to uppercase
const firstLetter = (str) => str.charAt(0).toUpperCase();
console.log(firstLetter("hacker"));
// write a JavaScript function that accepts an argument and return the datatype.
const dataType = (arg) => typeof arg;
console.log(dataType(90));
// write a function that returns whether  a number is even or odd
const oddOrEven = (num) => num % 2 === 0 ? "this is an even number" : "this  is a odd number";
console.log(oddOrEven(4));

// write a function named minutesToHours that recieves a number of minutes as parameter and return a number representing the same amount of time but in hours
const minutesToHours = (minutes) => `${minutes} is equal to ${minutes / 60}hrs`
console.log(minutesToHours(180));


const longestString = (str1, str2) => (str1.length > str2.length ? str1 : str2);
console.log(longestString("That", "Thought"));


const concat3 = (p1, p2, p3, seprator) => p1 + seprator + p2 + seprator + p3;
console.log(concat3("A","yo","mide", "-"));

const squareNum = (num) => num ** 2;
console.log(squareNum(3));


// write a function called checkLoanEligibility, which recieves an amount as a parameter and returns whether a user is eligible or not based on the critertion the loan amount of savings

let savings = 60000
const checkLoanEligibility = (loan) => loan < savings*2 ? "user is eligible to borrow amount" : "user is not eligible to borrow amount";
console.log(checkLoanEligibility(45000));
console.log(checkLoanEligibility(200000));
console.log(checkLoanEligibility(70000));

// write a function that logs Hello world to the console
const word = () => {
    console.log("Hello Wolrd");
}
word()

const myNum = () => 34;
console.log(myNum(34));

// write a function that return the number of vowels in a string
// const countNumOfVowels = (str) => {
//     let vowels = "aeiou";
//     let numOfVowel = 0;
//     const lowerCaseStr = str.toLowerCase();
//     for (let i = 0; i < lowerCaseStr.length; i++){
//         if (vowels.includes(lowerCaseStr(i))) {
//             numOfVowel++
//         }
//     }
//     return numOfVowel
// }
// console.log(countNumOfVowels("Hello world"));
