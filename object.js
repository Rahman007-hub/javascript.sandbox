// OBJECT
// {key : value}
// key and value pairs are called object properties
const person = {
    firstName: "Ade",
    lastName: "wale",
    age: 24,
    isMarried: true,
    friends: ["John", "Jane"],
    workHours:{
        monday: "8 hours",
    }
}
console.log(person);

// acess properties inside of object

// dot notation (objectName.propertyName)
console.log(person.age);
console.log(person.friends);
console.log(person.car);
console.log(person.workHours.monday);

// bracket  notation (objName["propertyName"])
console.log(person["age"]);
console.log(person["friends"][1]);
console.log(person["workHours"]["monday"]);

// Adding a new property to an object
person.car = "Benz"
person.hobbies = ["running","sleeping"]
console.log(person);

// revmoing a property in an object
delete person.isMarried;
console.log(person);

// object method - function that a developer write to work  on an object

const book = {
    Title: "In The Shadow",
    Author: "John Doe",
    yearPublished: 2000,
    genre: "Fiction",
    isBestSeller: false,
    rating: 3.5,
    summary: function () {
        // The book is title in the shadow and its written is by john doe and has a rating of 3.5
        console.log(`This Book is title  ${this.Title} and it is written by ${this.Author} and has a ${this.rating} rating`);
    }
}
book.summary();
book.Title
// The "this keyword" - inside of a function declaration in an object its refers to the object

// OBJECT DESTRUCTING - modern and fastest way of picking properties in an object
const user = {
    userName: "user001",
    fullName: "peter pan",
    password: "*******",
    profilePic: "Avatar",
    followers: ["wale", "John", "Jane"],
    following: ["Elon Musk", "T pain", "Ronaldo"],
    dateOfAccount: 2020,
    post: {
        title: "JS is Fun",
        description: "I LOVE JS ALOT",
    }
}

user.profilePic;
user.post.title

const { userName, profilePic, dateOfAccount, password } = user;
const { post: { title, description} } = user;
console.log(title, description);

const peoplesName = ["Susan", "Joy", "Mercy", "Ade"]
const [ ,second] = peoplesName;
console.log(second);


