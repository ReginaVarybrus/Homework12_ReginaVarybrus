'use strict';

let circles = document.querySelectorAll('.disabled');
let counter = 0;

let flashingStart = setInterval(() => {
    for (let i = 0; i < circles.length; i++) {
        circles[i].classList.remove('active');
    }
    if (counter > circles.length - 1)
    counter = 0;
    circles[counter].classList.add('active');
    counter++;
}, 5000);

const btn = document.getElementById('button');
const cnt = document.getElementById('counter');
let cntValue = 10;
let timer;
let paused;
let restart;

function timerStart () {
    cntValue = cntValue - 1;
    cnt.innerHTML = cntValue;
    if (cntValue <= 0) {
        timer = clearInterval(timer);
    }
};

function restartTimer () { 
    paused = setTimeout(function pausedFlashing () {
        for (let i = 0; i < circles.length; i++) {
            circles[0].classList.add('active');
            circles[1].classList.remove('active');
            circles[2].classList.remove('active');
        };
        flashingStart = clearInterval(flashingStart); 
        // paused = setTimeout(flashingStart, 10000);
    }, 0);

    timer = clearInterval(timer);
    cntValue = 10;
    if (cntValue) {
      cnt.textContent = cntValue;
      timer = setInterval(timerStart, 1000);
    //   paused = setTimeout(pausedFlashing, 0);
    //   restart = setInterval(flashingStart, 5000);
    }
};

btn.addEventListener('click', restartTimer);

