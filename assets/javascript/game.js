$(document).ready(function() {

var time = 100;
var intervalId;

$('#startBtn').on('click', start);

  function start() {
    $('#allQuestions').show();
    intervalId = setInterval(decrement, 1000);
  }
  function decrement() {
    time--;
    $("#show-time").html("<h2>" + time + "</h2>");
    if (time === 0) {
      stop();
      alert("Time Up!");
    }
  };



});
