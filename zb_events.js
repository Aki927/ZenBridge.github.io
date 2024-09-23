"use strict";

/*
    COMP 2681, Final Project
    Javascript for zb_events.html Current Time and
    Countdown feature. Shows system clock and
    a days, hours, minutes, seconds countdown to July-25-2025
    Loughborough Retreat. Message dynamically changes colours based
    on difference in days leading to event date.

    Author: Jerome Laranang, T00635622
    Date:   September 24, 2024

    Filename: zb_events.js
*/

// Display a countdown with one second intervals
showCountdown();
setInterval("showCountdown()", 1000);

// Displays a countdown to July 25, 2025, and dynamically updates the message colours
function showCountdown() {
    let todaysDate = new Date();
    let dateString = todaysDate.toLocaleDateString();
    let timeString = todaysDate.toLocaleTimeString();

    document.getElementById("today_date").innerHTML =
        dateString + " " + timeString;

    // Defines a variable for Loughborough Retreat Event: July 25, 2025
    let retreatDate = new Date("July 25, 2024");
    let nextYear = todaysDate.getFullYear() + 1;
    // let nextYear = currentDay.getFullYear(); Comment out. For testing only.
    retreatDate.setFullYear(nextYear);

    // Calculate the months, days, hours, minutes and second left until July 27, 2025
    let remMonth = getMonthsRemaining(nextYear, retreatDate.getMonth());
    let remDays = (retreatDate - todaysDate)/(1000 * 60 * 60 * 24);
    let remHrs = (remDays - Math.floor(remDays)) * 24;
    let remMin = (remHrs - Math.floor(remHrs)) * 60;
    let remSecs = (remMin - Math.floor(remMin)) * 60;

    document.getElementById("r_Days").textContent = Math.floor(remDays).toString();
    document.getElementById("r_Hrs").textContent = Math.floor(remHrs).toString();
    document.getElementById("r_Min").textContent = Math.floor(remMin).toString();
    document.getElementById("r_Sec").textContent = Math.floor(remSecs).toString();

    // Make the message red if difference is less than 30 days, green if 2-6 months, blue otherwise
    let color;
    if (remDays < 30) {
        color = "red";
    } else if (remMonth >= 2 && remMonth <= 6) {
        color = "green";
    } else {
        color = "blue";
    }

    // Apply color to all countdown elements
    document.getElementById("r_Days").style.color = color;
    document.getElementById("r_Hrs").style.color = color;
    document.getElementById("r_Min").style.color = color;
    document.getElementById("r_Sec").style.color = color;
}

// Returns the number of months remaining leading to July 25, 2025.
function getMonthsRemaining(targetYear, targetMonth) {
    // Get the current date
    const dateToday = new Date();

    // Create a date for the target month and year (July is month 6)
    const targetDate = new Date(targetYear, targetMonth - 1);

    // Generate the difference in years and months
    let diffInYears = targetDate.getFullYear() - dateToday.getFullYear();
    let diffInMonths = targetDate.getMonth() - dateToday.getMonth();

    // Return the total number of months
    return diffInYears * 12 + diffInMonths;
}

