
let count = 0

let button =  document.getElementById("increment-btn");
let storage = window.localStorage;
let localsave = document.getElementById("local-save");
let display = document.getElementById("saved-count");

function addPerson() {

    let storedArray = []

    button.addEventListener("click", () => {
     let error = document.getElementById("error");
     count ++
     error.innerText = ""
     document.getElementById("count-el").innerText = count;
 })

 let decrement = document.getElementById("decrease-btn");

 decrement.addEventListener("click", () => {
     let error = document.getElementById("error");

     if(count === 0 ) {
         error.innerText = "Please increase to decrease"
     } else {
         error.innerText = ""
         count--
     }
     // count --
     document.getElementById("count-el").innerText = count;
 })

    localsave.addEventListener("click", () => {
        let error = document.getElementById("error");
        if (count === 0) {
            error.innerHTML = "Please 0 cant not be saved"
        } else {
            localStorage.setItem("count", count);
        }
    })

    let fetch = localStorage.getItem("count");
    storedArray.push(fetch)

    storedArray.map(el => {
        display.innerHTML ="Previous entered Item" + " " + el + " " + "-"
    })

 return count

 }

 addPerson()