// Function to update the date and time
function updateTime() {
    var currentDate = new Date();
  
    // Get date and format it
    var date = currentDate.toDateString();
  
    // Get time and format it
    var time = currentDate.toLocaleTimeString();
  
    // Update date and time elements in the HTML
    document.getElementById("date").textContent = date;
    document.getElementById("time").textContent = time;
  }
  
  // Call updateTime function every second (1000 milliseconds)
  setInterval(updateTime, 1000);
  