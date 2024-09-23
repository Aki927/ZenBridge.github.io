"use strict";

/*
    COMP 2681, Final Project
    Javascript for zb_yoga.html.
    Makes the video element appear based on which 'Watch'
    button was clicked. Only one video appears and is played
    upon button click. User is alerted when switching to another video.

    Author: Jerome Laranang, T00635622
    Date:   September 24, 2024

    Filename: zb_yoga.js
*/

window.onload = init; // init() function is initialized upon window load

// Selects all video elements, sets display to none, and adds an event listener when switching video.
function init() {
    let allVideoElements = document.querySelectorAll("video");

    // Ensure all videos are hidden on page load using display none
    allVideoElements.forEach(video => {
        video.style.display = 'none';
    });

    // Attach event listeners to all the 'Watch' buttons
    let videoButtons = document.getElementsByClassName("buttons");

    for (let i = 0; i < videoButtons.length; i++) {
        videoButtons[i].addEventListener("click", function (event) {
            swapVideo(event, allVideoElements);
        });
    }
}

// Function to swap video when a button is clicked
function swapVideo(event, allVideoElements) {
    if (confirm("If there are any in-progress videos, they will stop. Continue?")) {

        // Pause all video elements, reset, and hide them
        allVideoElements.forEach(video => {
            video.pause();
            video.currentTime = 0; // Reset video to the beginning
            video.style.display = 'none'; // Hide all videos using display none
        });

        // Get the id of the button clicked and show corresponding video
        let videoID = event.target.id;

        // Plays the video that corresponds to the button clicked
        switch (videoID) {
            case "yoga_beginner-button":
                document.getElementById("beginner-video").style.display = 'block';
                document.getElementById("beginner-video").play();
                break;
            case "yoga_intermediate-button":
                document.getElementById("intermediate-video").style.display = 'block';
                document.getElementById("intermediate-video").play();
                break;
            case "advanced_yoga-button":
                document.getElementById("advanced-video").style.display = 'block';
                document.getElementById("advanced-video").play();
                break;
            default:
                console.log("Invalid video selection.");
        }
    }
}
