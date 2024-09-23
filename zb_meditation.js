"use strict";

/*
    COMP 2681, Final Project
    Javascript for zb_meditation.html.
    Makes the audio element appear based on which 'Listen'
    button was clicked. Only one audio appears and is played
    upon button click. User is alerted when switching to another audio.

    Author: Jerome Laranang, T00635622
    Date:   September 24, 2024

    Filename: zb_meditation.js
*/

window.onload = init; // init() function is initialized upon window load

// Selects all audio elements, sets display to none, and adds an event listener when switching audio.
function init() {
    let allAudioElements = document.querySelectorAll("audio");

    // Hide all the audio elements first
    allAudioElements.forEach(audio => {
        audio.style.display = 'none';
    });

    // Attach event listeners to all the 'Listen' buttons
    let audioButtons = document.getElementsByClassName("buttons");

    for (let i = 0; i < audioButtons.length; i++) {
        audioButtons[i].addEventListener("click", function (event) {
            swapAudio(event, allAudioElements);
        });
    }
}

// Swaps the audio to the one that is selected
function swapAudio(event, allAudioElements) {
    if (confirm("If there are any in-progress audio, they will stop. Continue?")) {

        // Pause all audio elements and hide them
        allAudioElements.forEach(audio => {
            audio.pause();
            audio.currentTime = 0; // Set audio to the very beginning
            audio.style.display = 'none'; // Initially hides all the audio element
        });

        // Get the id of the button clicked and show corresponding audio
        let audioID = event.target.id;

        // Plays the audio that corresponds to the button clicked
        switch (audioID) {
            case "loving_kindness-button":
                document.getElementById("loving_kindness-audio").style.display = 'block';
                document.getElementById("loving_kindness-audio").play();
                break;
            case "breathwork-button":
                document.getElementById("breathwork-audio").style.display = 'block';
                document.getElementById("breathwork-audio").play();
                break;
            case "bodyscan-button":
                document.getElementById("bodyscan-audio").style.display = 'block';
                document.getElementById("bodyscan-audio").play();
                break;
            default:
                console.log("Invalid audio selection.");
        }
    }
}
