
// Buttons Variables Declarations

const resetBtn = document.getElementById('resetBtn');
const startStopBtn = document.getElementById('startStopBtn');

let timer = document.getElementById('timer');
// Variables for Timer Values

let second = 0;
let minute = 0;
let hour = 0;

// Variables for Leading Zeros

let secondLeadingZero = 0;
let mintueLeadingZero = 0;
let hourLeadingZero = 0;

// Variables for Set Interval & Timer Status

let timerInterval = null;
let timerStatus = 'stopped';

// Stop Watch Functionality

function stopWatch() {

    second++;

    if(second / 60 === 1) {
        minute++;
        second = 0;

        if(minute / 60 === 1) {
            hour++;
            minute = 0;
        }
    }
    
    if(second < 10) {
        secondLeadingZero = "0" + second.toString();
    } 
    else {
        secondLeadingZero = second;
    }

    if(minute < 10) {
        mintueLeadingZero = "0" + minute.toString();
    } 
    else {
        mintueLeadingZero = minute;
    }

    if(hour < 10) {
        hourLeadingZero = "0" + hour.toString();
    } 
    else {
        hourLeadingZero = hour;
    }

    timer.innerText = (hourLeadingZero + ":" + mintueLeadingZero + ":" + secondLeadingZero);  
 
}

// const timerId = setInterval(stopWatch, 1000);

startStopBtn.addEventListener('click', (e) => {
    
    if(timerStatus === 'stopped') {
        timerInterval = setInterval(stopWatch, 60000);

        startStopBtn.innerHTML = `<svg id="pause" xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>`;
        timerStatus = 'started';
    }
    else {

        clearInterval(timerInterval);
        startStopBtn.innerHTML = `<svg id="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>`;

        timerStatus = 'stopped';

    }
});

resetBtn.addEventListener('click', () => {
    second = 0;
    minute = 0;
    hour = 0;

    clearInterval(timerInterval);
    timer.innerText = "00:00:00";

    if(timerStatus === 'started') {
        startStopBtn.innerHTML = `<svg id="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>`;
        timerStatus = 'stopped';
    }
    // timerInterval = null;

});