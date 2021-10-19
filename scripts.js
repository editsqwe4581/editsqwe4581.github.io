const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');

const newYears = '11 Nov 2021';

function countdown() {
    const newYearsData = new Date(newYears);
    const currentData = new Date();

    const totalseconds = (newYearsData - currentData) / 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const mins = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    daysE1.innerHTML = days;
    hoursE1.innerHTML = formatTime(hours);
    minsE1.innerHTML = formatTime(mins);
    secondsE1.innerHTML = formatTime(seconds);
}
function formatTime(time) {
    return time < 0 ? '0${time}' : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
