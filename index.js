/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


// function greet(str) {
//   const str = parseInt(string);
//   if (str < 12) return "Good Morning";
//    if (str > 5) return "Good Afternoon";
  
// }


function greet(string) {
  const time = parseInt(string);
  if ( time < 12) return "Good Morning";
  if ( time > 17) return "Good Evening";
  else return "Good Afternoon";
}

function displayMessage(m) {
 document.getElementById("greeting").innerText = m;
}
