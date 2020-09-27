/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let on_time= time.split(":"); //split to remove colon returns two strings
  let great_time= on_time[0].concat(on_time[1]) //concat joins the strings
  let result_time= parseInt(great_time, 10) //parseInt converts strings into numbers

  if (result_time < 1200){
    return "Good Morning";
  }
  else if (result_time > 1700){
    return "Good Evening";
  }
  else {
    return "Good Afternoon";
  }
  
}
  
//update the DOM
  function displayMessage(greet){
    let element = document.querySelector("input#time");
    element.innerHTML = 'TEST'
  } 
  
