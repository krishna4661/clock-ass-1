// scripts.js

function updateAnalogClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDegree = (seconds / 60) * 360;
    const minuteDegree = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDegree = (hours % 12) / 12 * 360 + (minutes / 60) * 30;

    document.querySelector('.second-hand').style.transform = `translateX(-50%) translateY(-100%) rotate(${secondDegree}deg)`;
    document.querySelector('.minute-hand').style.transform = `translateX(-50%) translateY(-100%) rotate(${minuteDegree}deg)`;
    document.querySelector('.hour-hand').style.transform = `translateX(-50%) translateY(-100%) rotate(${hourDegree}deg)`;
}

function updateDigitalClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('digital-time').textContent = `${hours}:${minutes}:${seconds}`;
}

function updateClock() {
    updateAnalogClock();
    updateDigitalClock();
}

setInterval(updateClock, 1000);
updateClock(); // initial call to display time immediately
