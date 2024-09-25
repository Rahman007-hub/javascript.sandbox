// DATA TYPES (primitive and complex data type)
// primitive value hold only one value : strings, number, boolean, null, undefine
// complex value hold more than one value : object, arrays

// STRINGS-text character quotation marks "" ''
const firstName = "John"
const lastName = "Doe"
console.log(firstName);
console.log(lastName);

// String Properties : Length, concatenation(joining)
// string.length
console.log(firstName.length);
console.log(lastName.length);
const fullName = firstName + " " + lastName;
console.log(fullName);
console.log(fullName.length);

// STRING METHODS : Are function that can be performed on strings
// toUppercase toLowerCase
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

// replace, replaceAll
console.log(fullName.replace("o", "*"));
console.log(fullName.replace("John","*"))
console.log(fullName.replaceAll("o", "*"))

// includes
console.log(fullName.includes("h"));
console.log(fullName.includes("y"));

// startsWtith, endWith
console.log(fullName.startsWith("Jo"));
console.log(fullName.endsWith("doe"));

const myEmail = "rahmanshonibare@gmail.com";
console.log(myEmail);
console.log(myEmail.length);
console.log(myEmail.toUpperCase());
console.log(myEmail.includes("e"));
console.log(myEmail.endsWith("google.com"));

// indexOf, lastIndexOf
console.log(myEmail.indexOf("r"));
console.log(myEmail.indexOf("a"));
console.log(myEmail.indexOf("w"));

// lastIndexOf
console.log(myEmail.lastIndexOf("r"))

//charAt
console.log(myEmail.charAt(11));

// concatination
console.log(myEmail.concat("example"));

//triming
const userName = "        Rahman007    "
console.log(userName.length);
console.log(userName.trim());

// trimStart, trimEnd
console.log(userName.trimStart());
console.log(userName.trimEnd());

// extract portion of a string
// slice method, substring, substr

// slice method and substring(start, end (non-inclusive))
const surname = "Sandler";
console.log(surname.slice(0, 4));
console.log(surname.substring(0, 4))

// substr(start, num of character we want )
console.log(surname.substr(0, 5));

const author = "Ngozi Adichie";
const bookTitle = "Americanah";
const yearPublished = 2016;
// The book Americanh written by
// Ngozi adichie was published in year 2016






// template literals - allows us to formart varibles into string

// backticks `the book $ {BookTitle}`
const description = `The book ${bookTitle} written by ${author} was published in the year ${2016}`
console.log(description);


const name1 = "Ade"
const name2 = "Wale"
// Ade is a boy
const sentence = `${name1} is a boy`
// His name is wale
const sentence2 = `His name is ${name2}`;

// 'Tinubu said and i qoute 'let the poor breathe''
const qoute = `Tinubu said and I qoute "Let the poor breathe"`
console.log(qoute);

// Number