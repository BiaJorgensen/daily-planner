// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  // Display current date - Format: Day of week, Month Day Year
  let currentDay = dayjs();
  $('#currentDay').text(currentDay.format('dddd, MMMM D YYYY'));
  const timeBlockDivs = $('.time-block');

  
  
 

  // Variables to get time slots from HTML
  let slot9 = $('#9');
  let slot10 = $('#10');
  let slot11 = $('#11');
  let slot12 = $('#12');
  let slot13 = $('#13');
  let slot14 = $('#14');
  let slot15 = $('#15');
  let slot16 = $('#16');
  let slot17 = $('#17');

  
// Function to add class to time slot depending on currect hour
function addStyleToTimeSlot() {
  // Get current time
  const currentHour = dayjs().hour();
  
  timeBlockDivs.each(function() {
    let hour = $(this).attr('id');
    if (hour == currentHour) {
      $(this).addClass('present')
    }
    else if (hour < currentHour) {
      $(this).addClass('past')
    }
    else if (hour > currentHour) {
      $(this).addClass('future')
    }
  })


}

addStyleToTimeSlot()
  
const saveBtn = $('.saveBtn');
saveBtn.click(function (e) { 
  
  e.preventDefault();

  let timeSlot = $(this).parents().attr('id')
  console.log(timeSlot);
 
  let description = $(this).prev().val();

  const newTask = {
    timeSlot,
    description
  }

  const allTasks = JSON.parse(localStorage.getItem("task")) || [];
  allTasks.push(newTask);
  localStorage.setItem("task", JSON.stringify(allTasks))
  
  
  
}); 









});
