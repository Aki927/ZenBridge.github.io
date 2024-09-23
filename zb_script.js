"use strict";

/*
    COMP 2681, Final Project
    Javascript for index.html
    Responsible for the switching mechanism when user
    clicks the left or right arrows on both ends.

    Author: Jerome Laranang, T00635622
    Date:   September 24, 2024

    Filename: zb_script.js
*/

let sPosition = 0; // Initially assign the sPosition to 0. Will use this to keep track of positions.

// Gets the carousel_photo
const slide = document.getElementsByClassName('carousel_photo');

// Length is 3
const totalSlides = slide.length;

// Adds an event listener for next button
document.getElementById('carousel_button_next')
    .addEventListener("click", function() {
        nextSlide();
    });

// Adds an event listener for previous button
document.getElementById('carousel_button_prev')
    .addEventListener("click", function() {
        prevSlide();
    });

// Updates the slide but adding the sequential photo and removing the current one.
function updateSlide() {
    for (let s of slide) {
        s.classList.remove('carousel_photo--visible');
        s.classList.add('carousel_photo--hidden');
    }

    slide[sPosition].classList.add('carousel_photo--visible');
}

// Changes to the next photo
function nextSlide() {
    if (sPosition === totalSlides - 1) {
        sPosition = 0;
    } else {
        sPosition++;
    }
    updateSlide();
}

// Changes to the previous photo
function prevSlide() {
    if (sPosition === 0) {
        sPosition = totalSlides - 1;
    } else {
        sPosition--;
    }
    updateSlide();
}