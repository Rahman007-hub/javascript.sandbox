// NUMBER DATA TYPE
const myAge = 89;

// number methods (toFixed method)
const num = 10;
console.log(num.toFixed(0));
console.log(num.toFixed(1));
console.log(num.toFixed(2));
// Math operators(+ - *)
const x = 7
const y = 7
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)

// ** (rasied to the power (exponent))
console.log(3 ** 2)
// modulous % (Retun the remainder of a division)
console.log(6 % 2)
console.log(100 % 10)

// order of operation (BODMAS)
// PEMDAS
// 4 + 2 * 3

let likes = 0
// likes = likes + 1
// likes = likes + 1
// likes = likes + 1
// likes = likes - 1
likes++;
likes++;
likes++;
likes--;
console.log("likes ", likes);

// likes++;
// likes--;

let saving = 5000
// saving = saving + 3000
saving+=3000
// saving = saving + 10000
saving+=10000
// 7000
// saving = saving - 7000
saving-=7000
// 525
// saving = saving - 525
saving -= 525
console.log(saving)
saving += 2000


const fullName = "Peter Pan";
const accountNumber = 234567890;
let myBalance = 4000;
// jan transaction
// credited 10000, debited 200 as sms charges, recieved gift 3000,
// gifted someone 1200
myBalance += 10000;
myBalance -= 200;
myBalance += 3000;
myBalance -= 1200;
console.log("myBalance is", myBalance);
// fullName with account number : has a balance of myBalance
const accountStatement = `${fullName} with account number ${accountNumber} has a balance of ${myBalance.toFixed(2)}`
console.log(accountStatement)
// NAN
console.log("hello"+ 6)


// tofixed(3)
// + - * / ** %
// order of operation (BODMAS PEMDAS)

// ++ --
// += -=