// Today's date
let todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);


$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        let text = $(this).siblings(".task").val();
        let time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    function whatTime() {
        //get current number of hours.
        let currentTime = moment().hour();

        // loop over hour blocks
        $(".hour-block").each(function () {
            let blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === currentTime) {
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

    // Local Storage
    $("#hour8 .task").val(localStorage.getItem("hour8"));
    $("#hour9 .task").val(localStorage.getItem("hour9"));
    $("#hour10 .task").val(localStorage.getItem("hour10"));
    $("#hour11 .task").val(localStorage.getItem("hour11"));
    $("#hour12 .task").val(localStorage.getItem("hour12"));
    $("#hour13 .task").val(localStorage.getItem("hour13"));
    $("#hour14 .task").val(localStorage.getItem("hour14"));
    $("#hour15 .task").val(localStorage.getItem("hour15"));
    $("#hour16 .task").val(localStorage.getItem("hour16"));
    $("#hour17 .task").val(localStorage.getItem("hour17"));

    whatTime();
})