/* THE PLAN
--1. curent day and time displayed at top of page (working clock)
2. each time block is color coded to indicate past, present, or future 
(changes dynamically with time)
--3. clicking in a time block lets user type
4. when save button is clicked, the text in THAT block is saved to local storage
5. on page reload, saved events persist
*/

//ELEMENT GRABS
var hour9_ID = $("#hour-9");
var hour10_ID = $("#hour-10");
var hour11_ID = $("#hour-11");
var hour12_ID = $("#hour-12");
var hour13_ID = $("#hour-13");
var hour14_ID = $("#hour-14");
var hour15_ID = $("#hour-15");
var hour16_ID = $("#hour-16");
var hour17_ID = $("#hour-17");
//console.log(typeof hour10.text());

//VARIABLES
var militaryClock = dayjs().format("H");
//var militaryClock = 17
//console.log(typeof militaryClock);
var hour9_val = hour9_ID.text();
var hour10_val = hour10_ID.text();
var hour11_val = hour11_ID.text();
var hour12_val = hour12_ID.text();
var hour13_val = hour13_ID.text();
var hour14_val = hour14_ID.text();
var hour15_val = hour15_ID.text();
var hour16_val = hour16_ID.text();
var hour17_val = hour17_ID.text();

//ARRAYS
var plannerHours = [
  hour9_ID,
  hour10_ID,
  hour11_ID,
  hour12_ID,
  hour13_ID,
  hour14_ID,
  hour15_ID,
  hour16_ID,
  hour17_ID 
];
//array of numbers corresponding to the time present in each div with an hourI_D
var numbersArray = [9,10,11,12,13,14,15,16,17];

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
  
  console.log("current military time: " + Number(militaryClock));

  for(var x = 0; x < numbersArray.length; x++){
    /*if military time is larger than the number at numbersArray[x]
          set the class of those elements in the correseponding plannerHours[] to "future"
      if military time is less than the number at numbersArray[x]
          set the class of those elements in the correseponding plannerHours[] to "past" 
      else military time is === to the number at numbersArray[x]
          set the class of those elements in the correseponding plannerHours[] to "present"
    */
    if(militaryClock < numbersArray[x]){
      plannerHours[x].parent().parent().attr("class", "row time-block future");
    } else if(militaryClock > numbersArray[x]){
      plannerHours[x].parent().parent().attr("class", "row time-block past");
    } else {
      plannerHours[x].parent().parent().attr("class", "row time-block present");
    }
  }

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  //working timer which displays current day, date, and time at top of page
  function displayDateTime() {
    timer = setInterval(function(){
      var today = dayjs();
      $("#currentDay").text(today.format("ddd, MMM/D/YYYY, hh:mm:ss"));
    },1000)
  }
  displayDateTime();

});


