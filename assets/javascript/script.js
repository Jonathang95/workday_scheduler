$(function() {
    console.log('jquery');
  //displays the time
  //able to determine if its past, present, or future for each line
    setInterval(() => {
      $('#currentDay').text(dayjs().format('MMM DD, YYYY hh:mm:ss a'));
      var currentHour = dayjs().format("H");
      $('.time-block').each(function() {
        var timeBlock = $(this).attr('id');
        if (currentHour > timeBlock) {
          $(this).addClass('past');
          $(this).removeClass('future');
          $(this).removeClass('present');
        } 
        if (currentHour < timeBlock) {
          $(this).addClass('future');
          $(this).removeClass('past');
          $(this).removeClass('present');
        }
        if (currentHour == timeBlock) {
          $(this).addClass('present');
          $(this).removeClass('past');
          $(this).removeClass('future');
        }
      });
    }, 1000); // Execute every second
  });
  //saves to local storage
  $('.saveBtn').click(function() {
    var eventStuff = $(this).siblings('.description').val();
    var timeBlock = $(this).parent().attr('id');
    localStorage.setItem(timeBlock, eventStuff);
  })
  //pulls from local storage
  //loops through elements with the time-block class
  //the id of each element id used to target specific text areas AND call saved data and save it to the text area
  $('.time-block').each(function() {
    var timeBlock = $(this).attr('id');
    $(this).children('.description').val(localStorage.getItem(timeBlock));
    });