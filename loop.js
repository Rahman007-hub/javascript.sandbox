// LOOPS(for,while do-while)
// FOR LOOP

// for(initializer; condition; increment){line code}
// imfiniteloop

for (let i = 0; i <= 10; i++){
    console.log("loop" + i)
}

// write a loop that return the sum of natural number between 0 and 100
sum = 0  
for (let i = 0; i <= 3; i++){
    sum += i;
}
console.log(sum);




let y = 0;
while (y <= 5) {
    console.log("In the loop");


    y++;
}
let num = 1
while (num <= 10) {
    console.log("Current value of Num is" + num);


    num++
}


// do while loop--perform the action once at least whether condition is true or false

let x = 5
do {
    console.log("I am in the loop");
    x++
} while (x <= 2);