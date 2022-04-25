function makeTimer() {
  
  // here you can set the end time and time zone
  var endTime = new Date("17 June 2024 00:00:00 GMT+02:00");
  endTime = Date.parse(endTime) / 1000;
  
  // get current time
  var now = new Date();
  now = Date.parse(now) / 1000;
  
  // calculate remaining time
  var timeLeft = endTime - now;
  
  // calculate days, hours, minutes and seconds
  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - days * 86400) / 3600);
  var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);
  
  // make method to scale divs
  $.fn.scalify = function() {
    var divwidth = $(".box").width();
    var fontWidth = $(this).width();
    var size = parseFloat($(this).css("font-size"));
    var fontSize = divwidth / fontWidth * size;

    $(this).css("font-size", fontSize);
  };
  
  // set days, hours minutes and seconds and set width
  $("#countdowndays p").html(days + " Tage").scalify();
  $("#countdownhours p").html(hours + " Stunden").scalify();
  $("#countdownmins p").html(minutes + " Minuten").scalify();
  $("#countdownsecs p").html(seconds + " Sekunden").scalify();
}

// update every second
setInterval(function() {
  makeTimer();
}, 1000);
