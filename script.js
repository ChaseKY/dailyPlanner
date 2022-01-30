var currentDay = document.querySelector("#currentDay");
var today = moment().format("MMMM Do, YYYY");

var military = parseInt(moment().format("H"));

var currentTime = moment().format('h A');

currentDay.textContent = today;

$("tr").each(function() {
    var time = parseInt($(this).attr("data"));
    if (military === time) {
        $(this).addClass("present");
    }
    if (military < time) {
        $(this).addClass("future");    
    }
    if (military > time) {
        $(this).addClass("past");
    }
})

$("button").on("click", function() {
    var hour9 = parseInt($(this).parent().attr("class"));
    var note9 = $("#time9").val();

    localStorage.setItem("hour9", note9)
})

$("#time9").append(localStorage.getItem("hour9"));

$("button").on("click", function() {
    var hour10 = parseInt($(this).parent().attr("class"));
    var note10 = $("#time10").val();

    localStorage.setItem("hour10", note10)
})

$("#time10").append(localStorage.getItem("hour10"));

$("button").on("click", function() {
    var hour11 = parseInt($(this).parent().attr("class"));
    var note11 = $("#time11").val();

    localStorage.setItem("hour11", note11)
})

$("#time11").append(localStorage.getItem("hour11"));

$("button").on("click", function() {
    var hour12 = parseInt($(this).parent().attr("class"));
    var note12 = $("#time12").val();

    localStorage.setItem("hour12", note12)
})

$("#time12").append(localStorage.getItem("hour12"));

$("button").on("click", function() {
    var hour1 = parseInt($(this).parent().attr("class"));
    var note1 = $("#time1").val();

    localStorage.setItem("hour1", note1)
})

$("#time1").append(localStorage.getItem("hour1"));

$("button").on("click", function() {
    var hour2 = parseInt($(this).parent().attr("class"));
    var note2 = $("#time2").val();

    localStorage.setItem("hour2", note2)
})

$("#time2").append(localStorage.getItem("hour2"));

$("button").on("click", function() {
    var hour3 = parseInt($(this).parent().attr("class"));
    var note3 = $("#time3").val();

    localStorage.setItem("hour3", note3)
})

$("#time3").append(localStorage.getItem("hour3"));

$("button").on("click", function() {
    var hour4 = parseInt($(this).parent().attr("class"));
    var note4 = $("#time4").val();

    localStorage.setItem("hour4", note4)
})

$("#time4").append(localStorage.getItem("hour4"));

$("button").on("click", function() {
    var hour5 = parseInt($(this).parent().attr("class"));
    var note5 = $("#time5").val();

    localStorage.setItem("hour5", note5)
})

$("#time5").append(localStorage.getItem("hour5"));