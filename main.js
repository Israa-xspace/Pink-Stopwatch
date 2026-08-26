const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const mainBtn = document.getElementById('main-btn');
const lapBtn = document.getElementById('lap-btn');

let seconds = 0;
let minutes = 0;
let hours = 0;
let timeInterval = null;
let isrunning = false;

function startsstopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    hoursDisplay.textContent = String(hours).padStart(2, '0');
}

mainBtn.addEventListener('click', function() {
    if (!isrunning) {
        timeInterval = setInterval(startsstopwatch, 1000);
        isrunning = true;
        mainBtn.textContent = "Stop";
        mainBtn.classList.remove('primary-btn');
        mainBtn.classList.add('stop-btn');
        lapBtn.textContent = "Lap";
        document.querySelector('.timer').classList.add('animate');
    } else {
        clearInterval(timeInterval);
        isrunning = false; 
        mainBtn.textContent = "Resume";
        mainBtn.classList.remove('stop-btn');
        mainBtn.classList.add('primary-btn');
        lapBtn.textContent = "Reset";
    }
});

lapBtn.addEventListener('click', function() {
    if (lapBtn.textContent === "Reset") {
        clearInterval(timeInterval);
        isrunning = false;
        seconds = 0;
        minutes = 0;
        hours = 0;
        secondsDisplay.textContent = "00";
        minutesDisplay.textContent = "00";
        hoursDisplay.textContent = "00";
        mainBtn.textContent = "Start";
        lapBtn.textContent = "Lap";
        document.querySelector('.timer').classList.remove('animate');
    } else {
        console.log(`lap record at: ${hours}:${minutes}:${seconds}`);
    }
});