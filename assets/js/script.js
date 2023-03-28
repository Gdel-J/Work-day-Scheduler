
$(document).ready(function () {// document ready function  Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute. 


  var currentDay = $('#currentDay')
  currentDay.text(dayjs().format('MMMM, dddd DD YYYY, h:mm:ss a'))//display the current date

  $(".saveBtn").click(function () {// saveBtn click listener 
    console.log(this)

    var text = ($(this).siblings('.description').val()); // from the sibblig html descrition attribute 
    var time = ($(this).parent().attr('id')); //from the parent html id attribute

    // Save data  in local storage
    localStorage.setItem(time, text);


  });

  function trackTime() {
    //check the time now 
    var whatimizit = dayjs().hour(); // use of dayjs to track to current time

    // check and loop within time blocks
    $(".time-block").each(function () {
      var blockOftime = parseInt($(this).attr("id").split("hour")[1]); //The JavaScript number parseInt() method parses a string argument and converts it into an integer value. 

      // Verifying the time in order to add  classes using conditional
      if (blockOftime < whatimizit) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (blockOftime === whatimizit) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {

        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }

    })

  }

  // Get item from local storage 
  $("#hour8 .description").val(localStorage.getItem("hour-8"));
  $("#hour9 .description").val(localStorage.getItem("hour-9"));
  $("#hour10 .description").val(localStorage.getItem("hour-10"));
  $("#hour11 .description").val(localStorage.getItem("hour-11"));
  $("#hour12 .description").val(localStorage.getItem("hour-12"));
  $("#hour13 .description").val(localStorage.getItem("hour-13"));
  $("#hour14 .description").val(localStorage.getItem("hour-14"));
  $("#hour15 .description").val(localStorage.getItem("hour-15"));
  $("#hour16 .description").val(localStorage.getItem("hour-16"));
  $("#hour17 .description").val(localStorage.getItem("hour-17"));

  trackTime();
  
})
