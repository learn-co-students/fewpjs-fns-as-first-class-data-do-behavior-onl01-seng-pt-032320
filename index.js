/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) { //creates a function called greet, the greet function takes in an argument of the above defined timeString
  const hour = parseInt(timeString, 10); // sets variable of hour. the hour is the timeString turned into an integer
  if (hour < 12) return "Good Morning" // if the hour integer is less than 12, puts out a "Good Morning" message
  if (hour > 17) return "Good Evening" //if the hour integer is greater than 17 (5PM), puts out a "Good Evening" message
  return "Good Afternoon" // if the hour integer is neither less than 12 or more than 17, puts out a "Good Afternoon" message

}
/* Write your implementation of displayMessage() */
function displayMessage(msg){
  document.getElementById('greeting').innerText = msg
}
