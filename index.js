/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(input) {
  const split = input.split(":");
  const hours = parseInt(split[0]);
  const minutes = parseInt(split[1]);
  let noon = 12 * 60;
  let evening = 17 * 60;

  time = hours * 60 + minutes;
  if (time < noon) { return "Good Morning"; }
  else if (time > noon && time < evening) { return "Good Afternoon"; }
  else if (time > evening) { return "Good Evening"; }
}
/* Write your implementation of displayMessage() */

function displayMessage(input) {
  let greeting = document.getElementById("greeting");
  greeting.innerText = input;
}