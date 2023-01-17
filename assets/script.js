// Functions are only called after the document is ready
$(function () {
  showCurrentDate();
  addStyleToTimeSlot();
  getTaskfromLS()
  saveTaskToLS()

});

// Function to show current date on page 
function showCurrentDate() {
  // Variable to get current date/time
  const currentDay = dayjs();
  // Display current date - Format: Day of week, Month Day Year
  $('#currentDay').text(currentDay.format('dddd, MMMM D YYYY'));
};
    
// Function to add class to time slot depending on current hour
function addStyleToTimeSlot() {
  // Gets current hour
  const currentHour = 14;
  // Variable to access div in HTML that contains the time slots
  const timeBlockDivs = $('.time-block');
  // The below is done for each of the HTML timeBlockDivs
  timeBlockDivs.each(function() {
    // Gets id from timeBlockDivs and compares with current hour to apply different colors to time slots if they are past hour, present hour or future hour
    const hour = $(this).attr('id');
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
};

// Function to get tasks saved from local storage to show on page even after page is reloaded
function getTaskfromLS() {
  // Variable to access div in HTML that contains the time slots
  const timeBlockDivs = $('.time-block');
  // The below is done for each of the HTML timeBlockDivs
  timeBlockDivs.each(function() {
    // Gets id from timeBlockDivs so it can be used to get the task from local storage according to the key that was created using the same id
    const hour = $(this).attr('id');
    const task = JSON.parse(localStorage.getItem(hour));
    // Ensures that task added by user will keep showing on page even after page is reloaded
    if (task) {
      $(this).children('textarea').val(task)
    }
  })
};

// Funtion to save tasks to local storage when save button is clicked
function saveTaskToLS() {
 // Variable to access all HTML save buttons
 const saveBtn = $('.saveBtn');
 // When save button is clicked, below function identifies the id of the div where the button is located and use the id as key to save task in local storage
 saveBtn.click(function (e) { 
   e.preventDefault();
   // Gets id from div (parent) where the button is located
   const hour = $(this).parents().attr('id')
   // Gets content in textbox from same div that button that was clicked is located (textbox is the button's previous sibling)
   const description = $(this).prev().val();
   localStorage.setItem(hour, JSON.stringify(description))
 }); 
};