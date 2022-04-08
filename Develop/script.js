// Variables
let saveBtn = $(".saveBtn");

// Today's date
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));


// Fuctions:

// Gives each hour a color
hourColor();

// Save task on page refresh
saveTask();


function hourColor() {
    let hour = moment().hours();

    $(".hour-block").each(function () {
        let presentHour = parseInt($(this).attr("id"));

        if (presentHour > hour) {
            $(this).addClass("future");
        } else if (presentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};


function saveTask() {

    $(".hour").each(function () {
        let presentHour = $(this).text();
        let currentTask = localStorage.getItem(presentHour);

        if (currentTask !== null) {
            $(this).siblings(".task").val(currentTask);
        }
    });
}


// On click for saveBtn
saveBtn.on("click", function () {

    let time = $(this).siblings(".hour").text();
    let task = $(this).siblings(".task").val();

    // Input saved in local storage
    localStorage.setItem(time, task);
});
