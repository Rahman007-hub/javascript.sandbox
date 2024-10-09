// ASYNCHRONOUS JS

// synchronous/blocking
console.log("a"); 
console.log("b");  //download a file of 2gb
console.log("c");  // send an email

// nonblocking code
console.log(1);
setTimeout(() => {
    console.log(2);
}, 5000)
console.log(3);

// Fetching data

// API - application programming interface


