// Variables
let saveBtn = $(".saveBtn");


// Today's date
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));


// Fuctions:
// This function gives each block a color
function hourColor() {
    let hour = moment().hours();

    $(".hour-block").each(function () {
        let currHour = parseInt($(this).attr("id"));

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};



