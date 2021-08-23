/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const button = document.querySelector('button')
const greeting = document.getElementById("greeting")
button.addEventListener("click", handleClick())


function displayMessage(s){
  greeting.textContent = s
}

function greet(g) {
  let time = parseInt(g)
  if(time < 12 ){
    return "Good Morning"
  } else if (time >= 12 && time < 17 ) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
};

/* Write your implementation of displayMessage() */

