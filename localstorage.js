// LOCAL STORAGE

// Setting something into the local storage
// localStorage.setItem("token", "hello")

// // getting something from the local storage
// localStorage.getItem("token")

// // remove value in the localstorage
// localStorage.removeItem("token")

// // clear our local storage
// localStorage.clear()

// localstorage can only take in strings
const user = {
    id:1,thene:"dark"
}
// JSON.stringify
// JASON - javascript object notation
localStorage.setItem("user", JSON.stringify(user));
// JASON.parse
localStorage.getItem("user")
JASON.parse(localStorage.getItem("user"))