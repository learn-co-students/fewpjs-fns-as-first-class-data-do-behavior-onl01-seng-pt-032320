/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(string) {
  let array = string.split('');
  let hours = array[0] + array[1];
  let time = parseInt(hours, 10);
  if (time < 12) {
    return "Good Morning"
  }
  if (time >= 12 && time <= 17) {
    return "Good Afternoon"
  }
  if (time > 17) {
    return "Good Evening"
  }

}

function displayMessage(string) {
  let message = document.querySelector('h1')
  message.innerText = string
}
