/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */


function greet(timeOfDay){
const time = parseInt(timeOfDay,10)
 if (time < 12)
    return "Good Morning"
 else if (12 < time && time <= 17 )
    return "Good Afternoon"
 else if  (17 < time )
    return "Good Evening"
  
}

/* Write your implementation of displayMessage() */
const displayMessage = (message) => {
  document.getElementById("greeting").innerText = message;
}