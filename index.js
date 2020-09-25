/* Given Code, don't edit */


document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  const parsed = parseInt(time, 10);
  if (parsed < 12.00){
    return "Good Morning"
  } 
  else if (parsed > 12.00 && parsed < 17.00){
    return "Good Afternoon"
  } 
  else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(str){
  // let message = document.getElementById("greeting")
  let message = document.querySelector("h1#greeting")
  message.innerText = str 
  

}
