let myCountry = "Canada";
console.log(myCountry.length);





let myAge = 12;

const firstName = "Jack"
const lastName = "Griffo"
const fullName = firstName + lastName

console.log(fullName.length);

console.log(fullName.toUpperCase());
console.log(fullName.slice(0, 4));
const description = `${fullName} is a citizen of ${myCountry}`;
console.log(description);

myAge++
console.log(myAge);
console.log(100 % 7);
console.log(myCountry.startsWith("h"));

const marksMass = 95;
const marksHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const marksBmi = marksMass / marksHeight ** 2;
const johnBmi = johnMass / johnHeight ** 2;
const markHigherBmi = marksBmi > johnBmi;
console.log(marksBmi, johnBmi);
console.log(markHigherBmi);
// if (markHigherBmi) {
//     console.log("Mark's BMI is higher than jonh.s");
// } else {
//     console.log("John's BMI is higner than Mark's");
// }
if (marksBmi > johnBmi) {
  console.log("Mark's BMI is higher than jonh.s");
} else if (johnBmi > marksBmi) {
  console.log("John's BMI is higner than Mark's");
} else {
  console.log("John's BMI and Mark's BMI is equal");
}
const dolphins1 = 96;
const dolphins2 = 108;
const dolphins3 = 89;
const panda1 = 88;
const panda2 = 89;
const panda3 = 110;
const totalDolphinScore = dolphins1 + dolphins2 + dolphins3;
const totalPandaScore = panda1 + panda2 + panda3;

const avgDolphin = totalDolphinScore / 3;
const avgPanda = totalPandaScore / 3;

console.log(`totalDolphin score is ${avgDolphin}`);
console.log(`totalpanda score is ${avgPanda}`);

if (avgDolphin > avgPanda) {
  console.log("Dolphins wins");
} else if (avgDolphin < avgPanda) {
  console.log("panda wins");
} else {
  console.log("this is a tie");
}
if (avgDolphin > avgPanda && avgDolphin >= 100) {
  console.log("Dolphins win");
} else if (avgDolphin < avgPanda && avgPanda >= 100) {
  console.log("panda wins");
} else {
  console.log("No team wins");
}
if (avgDolphin > avgPanda && avgDolphin >= 100) {
  console.log("Dolphins win");
} else if (avgDolphin < avgPanda && avgPanda >= 100) {
  console.log("panda wins");
} else if (avgDolphin === avgPanda && avgDolphin >= 100 && avgPanda >= 100) {
  console.log("This is a draw");
} else {
  console.log("No team wins");
}