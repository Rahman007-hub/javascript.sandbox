// ASYNCHRONOUS JS

// synchronous/blocking
// console.log("a"); 
// console.log("b");  //download a file of 2gb
// console.log("c");  // send an email

// // nonblocking code
// console.log(1);
// setTimeout(() => {
    //     console.log(2);
    // }, 5000)
    // console.log(3);
    
    // Fetching data
    
    // API - application programming interface
    
const url = "https://jsonplaceholder.typicode.com/users";
    

// PROMISES - are container for future value (fullfiled, rejected, pending)
// .then method
// fetch(url).then((Response) => {
//     return Response.json()
// }).then((data) => {
//     console.log(data);
    
// })
fetch(url).then((reponse) => reponse.json()).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})

// async / await
const getUser = async () => {
    try {
        const Response = await fetch(url)
        const data = await Response.json()
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
}
getUser()

// REQUEST METHODS

// GET - its use to retrieve data,
// POST- is used to create data,
// PATCH - its use to update data,
// DELETE - its use to remove data,
// PUT- its use to update (total overhaul)
