// conditional statement
// control flow

const mybalance = 3000;
const transaction = 3000;


// "if" statement
// if(condition){
//lines of code
//}
// if (true) {
//     console.log("yes")
// }
if (mybalance >= transaction) {
    console.log("Transaction successfull")
} 
// 18+
const age = 23
if (age >= 18) {
    console.log("You are eligible to vote")
}

// If the length of the password is 7 and above has @- good password 
const password = "7u7u7u7u7u7@";
if (password.length >= 7 && password.includes("@")) {
    console.log("Good Password")
}

// 'if' else statement
// if (condition){
//first action
//}else{
// }

const age2 = 25
// eligible 18= or not
if (age2 >= 18) {
    console.log("you are eligible to vote")
} else {
    console.log("You are ineligible to vote")
}


// youth/underage 0-40 or age 41
const age3 = 50
if (age3 >=0 && age3 <= 40) {
    console.log("you are in the youth/underage category")
} else {
    console.log("you are in the age category")
}

const number = 90
if (number% 2 ===0  ) {
    console.log("even number")
} else {
    console.log("odd number")
}
const saving = 1000
const transaction2 = 500

if (saving >= transaction2) {
    console.log("Transaction Succesfull")
} else {
    console.log("Insuficient fund")
}
// multiple condition (else, if statement)
// positive > 0 negetive < 0 and zero 0
let myNum = 98
if (myNum> 0) {
    console.log("This is a positive number");
} else if (myNum < 0) {
    console.log("This is a negative number")
} else {
    console.log("This is zero");
}

// Underage 0-12 Teens 13-19 Adults 20+ Aged 41 and above
const myAge = 24

if (myAge >= 0 && myAge <= 12) {
    console.log("underage")
}
    
//  Switch statement : They are use to perform action based on different condition
// A-excellent, b-very good

let grade = "B"

switch (grade) {
  case "A":
  case "a":
    console.log("Excellent");
    break;
  case "B":
  case "b":
    console.log("Very Good");
    break;
  case "C":
  case "c":
    console.log("Good");
    break;
  case "D":
  case "d":
    console.log("Fair");
    break;
  case "E":
  case "e":
    console.log("Poor");
    break;
  case "F":
  case "f":
    console.log("Failed");
        break;
    default:
        console.log("Invalid Grade");
}
