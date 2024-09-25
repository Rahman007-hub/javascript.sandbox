// BOOLEAN VALUES (true or false): is used in making decision
const isMarried = false;

// COMPARISON OPERATOR >< == === <= >=
// == Loose eqality sign  (doesn't check data type)
// === strict eqality sign 
// 6 > 9
console.log(6.5 > 9);
console.log(5 == 5); 
console.log(5 == "5");
console.log(5 === "5");
console.log(6.0 >= 6);
// confirm.log(7.2 == "7.2");
console.log(5.0 === 5.0);
console.log(7 <= 8);
console.log(9.0 >= "90");
console.log(89 === "89");
console.log(4 + 4 >= 7);
//  LOGICAL OPERATOR and (&&), or(||), not (!)
console.log(7 > 6 && 5 > 4); // t and t
console.log(11 === "11" && 2 == 2);// f and t
console.log(5 >= 6 && 2 == 2); // f and t
console.log(7 === 7 && 9 > 11); 
console.log("a" === "A" && 2 === 2)
console.log(6 > 7 && 7 < 9 && 32 >= 8)
console.log(6 > 7 || 5 < 8)

console.log(false || false)
console.log(6 > 7 || 5 < 8)


const country = "Nigeria"
const isIsland = false

// TRUTHY AND FALSY VALUES
// string 'wale'
console.log(Boolean(" "))
// number all valid number (-ve +ve)

console.log(Boolean("0"))

// null and undefine are falsy value
