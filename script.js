var currentDay = document.querySelector("#currentDay");
var today = moment().format('LLLL');

var hour9 = document.querySelector("#10am");

var currentTime = moment().format('h A');
console.log(currentTime);

currentDay.textContent = today;

