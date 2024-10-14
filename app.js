// // DOM - Document object model

// // get element by ID
// const text = document.getElementById("text")
// console.log(text);

// // get element by class name
// const message = document.getElementsByClassName("message")
// console.log(message);

// // querySelector, querySelectorAll - uses CSS selector . #
// const paragraph = document.querySelector("p");
// console.log(paragraph);

// const paragraphs = document.querySelectorAll("p")
// console.log(paragraphs);

// const heading6 = document.querySelector("div h6")
// console.log(heading6);

// // textContent, innerText, innerHtml

// const heading = document.querySelector("h1")
// // console.log(heading.textContent);
// // heading.textContent += " JS IS FUN"
// console.log(heading.innerText);
// heading.innerText = " JS is good"

// const div = document.querySelector("div")
// console.log(div.innerHTML);
// div.innerHTML +=  `<p>okay</p> `

// const name = "John"
// div.innerHTML = `<h1> welcome ${name}</h1>`

// const beginPara = document.querySelector(".begin")
// console.log(beginPara);
// beginPara.className = "okay"
// beginPara.id = "good";
// beginPara.style.color = "gold"
// beginPara.style.backgroundColor = "black"

// // interact with CSS classnames
// const h1 = document.querySelector("h1")
// h1.className = "success"

// // classList - add or remove
// const msg = document.querySelector("h2.message")
// // console.log(msg.classList);
// msg.classList.add("error")
// msg.classList.remove("example")
// console.log(msg.classList.contains("good"));

// console.log(msg);

// const section = document.createElement("section")
// section.innerHTML = "<h1> Created from JS </h1>"

// // append
// const body = document.querySelector("body")
// body.appendChild(section)

// // remove elment removeChild
// // body.removeChild(section)


// // replace child
// const link = document.createElement("a")
// link.innerText = "Visit Google";
// // link.href = "htts://google.com";
// link.setAttribute("href", "https://google.com")
// body.replaceChild(link,section)

// // responding to user interractionds
// // event(click), event handler
// // addEventListener - handle
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//     console.log("button clicked");
//     body.style.backgroundColor = "aqua"
// })

// form handling
const form = document.querySelector("form")
// submit event
form.addEventListener("submit", (event) => {
    // default of forms when submitted is to refresh the page
    event.preventDefault();
    // select those inputfield
    const username = document.querySelector(".username")
    const password = document.querySelector(".password");

    const usernameValue = username.value.trim();
    const passwordValue = password.value;
    const small = document.querySelector("small")
    // console.log(usernameValue, passwordValue);
    
    // validate()
    if (!usernameValue || !passwordValue) {
        // display error message
        small.textContent = 'please fill all fields'
    } else if (username.length < 5) {
        small.textContent = "minimum user length is 5";
    } else if (passwordValue.toLowerCase().includes("password")) {
        small.innerText ="pasword must not include password"
    } else {
        small.textContent = "Form Submitted"
    }
})
