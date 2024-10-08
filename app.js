//
// rest and spread operator(...)
// rest operator
const countries = ["Cuba", "Algeria", "mexico", "USA", "Doha"]
const [one,...other] = countries;

console.log(one);
console.log(other);

const country = {
    name: "Nigeria",
    yearOfIndependence: "1960",
    officialLanguage: "English",
    isIsland: false,
};
const {name, isIsland, ...remaining} =country
console.log(remaining);

// spread operator
const africanCountries = ["Mail", "Togo", "kenya", "Uganda"]
const asianCountries = ["Chian", "Japan", "Bangladesh", "Vietnam"]

const allCountries = [
    "uk",
    ...africanCountries,
    "Congo",
    ...asianCountries,
    "Chain"
]
console.log(allCountries);


// optional chaining
const user = {
    name: "John Doe",
    age: 45,
    previousJobs: {
        one: "Jumia",
        two: "Paystack",
        three:"meta"
    }
}
console.log(user.name);
console.log(user?.car);
console.log(user?.previousJobs?.three);

// if(user.profilePic){
// display picture
// < img src = {}
// }
// img src = {user?.profilrPics}



// nullish coalescence
// leftExpression ?? defaultValue
const userName = "Ade"
console.log(userName ?? "Unknown User");
