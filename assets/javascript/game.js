$(document).ready(function() {

var time = 60;
var intervalId;
var clockRunning = false;
var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 10;

// start button
$('#startBtn').on('click', start);

function start() {
  $('#allQuestions').show();
  clockRunning = true;
  intervalId = setInterval(decrement, 1000);
}
function decrement() {
  time--;
  $("#show-time").html("<h2>Time Remaining: " + time + "</h2>");
  if (time === 0) {
    clearInterval(intervalId);
    clockRunning = false;

    var question1 = $("input[name='question1']:checked").val()
    var question2 = $("input[name='question2']:checked").val()
    var question3 = $("input[name='question3']:checked").val()
    var question4 = $("input[name='question4']:checked").val()
    var question5 = $("input[name='question5']:checked").val()
    var question6 = $("input[name='question6']:checked").val()
    var question7 = $("input[name='question7']:checked").val()
    var question8 = $("input[name='question8']:checked").val()
    var question9 = $("input[name='question9']:checked").val()
    var question10 = $("input[name='question10']:checked").val()

  if (question1  === "correct"){ correctAnswers++; unanswered--;}
  else if (question1 === "wrong"){ wrongAnswers++; unanswered--;}

  if (question2 === "correct") { correctAnswers++; unanswered--;}
  else if (question2 === "wrong") { wrongAnswers++; unanswered--;}

  if (question3 === "correct") { correctAnswers++; unanswered--;}
  else if (question3 === "wrong") { wrongAnswers++; unanswered--;}

  if (question4 === "correct") { correctAnswers++; unanswered--;}
  else if (question4 === "wrong") { wrongAnswers++; unanswered--;}

  if (question5 === "correct") { correctAnswers++; unanswered--;}
  else if (question5 === "wrong") { wrongAnswers++; unanswered--;}

  if (question6 === "correct") { correctAnswers++; unanswered--;}
  else if (question6 === "wrong") { wrongAnswers++; unanswered--;}

  if (question7 === "correct") { correctAnswers++; unanswered--;}
  else if (question7 === "wrong") { wrongAnswers++; unanswered--;}

  if (question8 === "correct") { correctAnswers++; unanswered--;}
  else if (question8 === "wrong") { wrongAnswers++; unanswered--;}

  if (question9 === "correct") { correctAnswers++; unanswered--;}
  else if (question9 === "wrong") { wrongAnswers++; unanswered--;}

  if (question10 === "correct") { correctAnswers++; unanswered--;}
  else if (question10 === "wrong") { wrongAnswers++; unanswered--;}

    $('#allQuestions').hide();
    $('#startBtn').hide();
    $('#doneScreen').show();
    $("#correct").html("<h2>Correct Answers " + correctAnswers + "</h2>");
    $("#incorrect").html("<h2>Incorrect Answers " + wrongAnswers + "</h2>");
    $("#unanswered").html("<h2>Unanswered " + unanswered + "</h2>");
  }
};

// done button
$('#doneBtn').on('click' , done);
function done(){
  clearInterval(intervalId);
  clockRunning = false;

  var question1 = $("input[name='question1']:checked").val()
  var question2 = $("input[name='question2']:checked").val()
  var question3 = $("input[name='question3']:checked").val()
  var question4 = $("input[name='question4']:checked").val()
  var question5 = $("input[name='question5']:checked").val()
  var question6 = $("input[name='question6']:checked").val()
  var question7 = $("input[name='question7']:checked").val()
  var question8 = $("input[name='question8']:checked").val()
  var question9 = $("input[name='question9']:checked").val()
  var question10 = $("input[name='question10']:checked").val()

if (question1  === "correct"){ correctAnswers++; unanswered--;}
else if (question1 === "wrong"){ wrongAnswers++; unanswered--;}

if (question2 === "correct") { correctAnswers++; unanswered--;}
else if (question2 === "wrong") { wrongAnswers++; unanswered--;}

if (question3 === "correct") { correctAnswers++; unanswered--;}
else if (question3 === "wrong") { wrongAnswers++; unanswered--;}

if (question4 === "correct") { correctAnswers++; unanswered--;}
else if (question4 === "wrong") { wrongAnswers++; unanswered--;}

if (question5 === "correct") { correctAnswers++; unanswered--;}
else if (question5 === "wrong") { wrongAnswers++; unanswered--;}

if (question6 === "correct") { correctAnswers++; unanswered--;}
else if (question6 === "wrong") { wrongAnswers++; unanswered--;}

if (question7 === "correct") { correctAnswers++; unanswered--;}
else if (question7 === "wrong") { wrongAnswers++; unanswered--;}

if (question8 === "correct") { correctAnswers++; unanswered--;}
else if (question8 === "wrong") { wrongAnswers++; unanswered--;}

if (question9 === "correct") { correctAnswers++; unanswered--;}
else if (question9 === "wrong") { wrongAnswers++; unanswered--;}

if (question10 === "correct") { correctAnswers++; unanswered--;}
else if (question10 === "wrong") { wrongAnswers++; unanswered--;}

$('#allQuestions').hide();
$('#startBtn').hide();
$('#doneScreen').show();
$("#correct").html("<h2>Correct Answers " + correctAnswers + "</h2>");
$("#incorrect").html("<h2>Incorrect Answers " + wrongAnswers + "</h2>");
$("#unanswered").html("<h2>Unanswered " + unanswered + "</h2>");
};



$('#restartBtn').on('click', function(){
  location.reload();
})

});
