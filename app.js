// ARRAYS - These are complex data types
// [element1, element2, ]
const mixedArr = [9, "str", true, 65, 9.8, null, [90, false]];

const students = ["Goodness", "Aisha", "Adura"];
console.log(students);

// ARRAY PROPERTIES(Length)
console.log(students.length);

// getting element in array - postion arrName[position]
console.log(students[1]);

// change el in array
students[0] = "John Doe";
console.log(students);

// ARRAY METHOD
// Adding and removing el from array (push, pop, shift, and unshift)
// LIFO

// Push method
students.push("Theresa");
students.push("Eniola");
students.pop();
students.pop();
console.log(students.pop());

students.unshift("Adedayo");
students.unshift("Timi");
students.shift();
console.log(students);

// CONVERTING ARRAY TO STRING (toString, Join)
console.log(students.toString());
console.log(students.join("  "));

const onlineStudent = ["John", "Peter", "Paul"];
const weekdayStudent = ["Ade", "Susan", "Joy"];
const allStudent = onlineStudent.concat(weekdayStudent, ["Ruth", "Gift"]);
console.log(allStudent);

// Includes
console.log(onlineStudent.includes("Paul"));

// SORT AND REVERSE METHODS
const carBrand = ["Lamborgini", "Supra", "BMW", "Audi", "Chevrolet"];
console.log(carBrand);
console.log(carBrand.sort());
console.log(carBrand.reverse());

// extract portion of an array (slice(start, end(not included)))
const friend = ["Tobi", "Kazeem", "Mujeeb", "Raheem"];
console.log(friend);
console.log(friend.slice(0, 2));
console.log(friend.slice(1));

// Split
let text = "Hello World is fun";
console.log(text.split("  "));

const text2 = "tadapal";
console.log(text2.split(" "));

// hello olleh
const reverseStr = (str) => str.split("").reverse().join("");
console.log(reverseStr("hello"));

// HIGHER ORDER ARRAY METHODS(callback function, iterator methods)
// for Of method
// const fruit = ["orange", "mangoes", "pear", "grapes"]
// for (const fruit of fruits) {
//     console.log(`${fruit} is something i like`);
//     if (fruit === "pear") {
//         console.log(`${fruit} is my best fruit`);
//     }

// }


// find, filter forEach, map, reduce every some
// FOREACH - it executes a function for each element in an array
const customer = ["ola", "dayo", "wale", "tolu", "musa"];
customer.forEach((customer, index) => {
  console.log(customer, index);
});
const customerOfTheWeek = customer.find((customer) => customer.length > 4);
console.log(customer);

// MAP - creates a new array with transformed element
const num = [4, 5, 6, 7];

const transformedNums = num.map((num) => {
  return num * 10;
});
console.log(transformedNums);

// FIND - returns the first matching element in an array
const mySpecialNum = num.find((num) => {
  return num > 5;
});
console.log(mySpecialNum);

// FILTER - returns all element that fits a search condition in an array
const allMyspecialNums = num.filter((num) => num > 5);
console.log(allMyspecialNums);

let myBalance = 8000;
const transaction = [4000, -125, 10000, -5000, -2000, 1500];
transaction.map((transaction) => {
  if (transaction > 0) {
    console.log(`You have been credited with ${transaction} naira`);
  } else {
    console.log(`you have been debited ${transaction} naira`);
  }
});

transaction.map((transaction) => {
  myBalance += transaction;
});
console.log(myBalance);

const myCreditTransaction = transaction.filter(
  (transaction) => transaction > 0
);
console.log(myCreditTransaction);

const myDebitTransaction = transaction.filter((transaction) => transaction < 0);
console.log(myDebitTransaction);

const maxTransaction = 50000;
transaction.push(100000);
// find if there any transaction close to that maxTransaction
const specialTransaction = transaction.find(
  (transaction) => transaction >= maxTransaction
);
console.log(specialTransaction);

// every and some
// EVERY- check is all element satify a condition
const ages = [20, 42, 64, 83,11];
const allAdult = ages.every((ages) => ages > 18);
console.log(allAdult);

// some - check if at least one satisfy the condition
const someChildren = ages.some((ages) => ages < 18);
console.log(someChildren);

// REDUCE METHOD -mostly used for accumulating numbers
const cartPrices = [25000, 32000, 15000, 4000, -2500]
const cartTotal = cartPrices.reduce((prev, curr) => {
   return prev + curr
},300)
console.log(cartTotal);

const peoplesName = ["Zigi", "malik", "femi", "Badmos"]
// const aToZ = peoplesName.sort();
// console.log(aToZ);
const zToA = peoplesName.sort((a, b) => b - a );
console.log(zToA);

const prices = ["2000", "6000", "5000", "8000", "23000",]
const lowestToHighest = prices.sort((a, b) => a - b);
console.log(lowestToHighest);


