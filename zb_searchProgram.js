"use strict";

/*
    COMP 2681, Final Project
    Javascript for index.html
    Used in the Select a Bridge Program section in the home page.
    Directs user to the chosen page when the button 'Learn More' is clicked.

    Author: Jerome Laranang, T00635622
    Date:   September 24, 2024

    Filename: zb_searchProgram.js
*/

window.addEventListener("load", selectRoute);

function selectRoute() {
    document.getElementById("programForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const selectedProgram = document.getElementById('bProg').value;
        // Define the page redirects based on the selected program
        const programPages = {
            'ADHD': 'zb_ADHD.html',
            'Anxiety': 'zb_anxiety.html',
            'Depression': 'zb_depression.html',
            'PTSD': 'zb_PTSD.html',
            'Grief & Loss': 'zb_grief.html',
            'Stress & Burnout': 'zb_stress.html',
            'Substance Abuse': 'zb_substance.html',
            'Ask us. We\'re here to listen': 'consultation_form.html'
        };

        // Redirect to the corresponding page if the program exists
        if (programPages[selectedProgram]) {
            window.location.href = programPages[selectedProgram];
        } else {
            alert('Program not found');
        }
    })
}
