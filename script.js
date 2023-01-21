'use strict';

const cnt = document.getElementById('counter');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');

let cntValue = 10;
let timer;

const streetLightStates = {
    1: {
      next: 2,
      interval: 5000,
      setState: () => {
        red.classList.add('active');
        yellow.classList.remove('active');
        green.classList.remove('active');
        console.log('red');
      }
    },
    2: {
      next: 3,
      interval: 5000,
      setState: () => {
        yellow.classList.add('active');
        red.classList.remove('active');
        green.classList.remove('active');
        console.log('yelow')
      }
    },
    3: {
      next: 1,
      interval: 5000,
      setState: () => {
        green.classList.add('active');
        yellow.classList.remove('active');
        red.classList.remove('active');
        console.log('green')
      }
    },
    4: {
      next: 1,
      interval: 5000,     
      setState: () => {
        function timerStart () {
            cntValue = cntValue - 1;
            cnt.innerHTML = cntValue;
            if (cntValue <= 0) {
                timer = clearInterval(timer);
            }
        };
        
        function handleTimer() {
            timer = clearInterval(timer);
            cntValue = 10;
            if (cntValue) {
              cnt.textContent = cntValue;
              timer = setInterval(timerStart, 1000);
            };
        };

        function handlerWalk() {
            red.classList.add('active');
            yellow.classList.remove('active');
            green.classList.remove('active');
            console.log('red.paused');
        }
        handleTimer();
        handlerWalk();        
      }
    }
  };

  let currentState = 1;
  let pressed = false;

  function a() {
    if (pressed) {
      currentState = 4;
      pressed = false;
    }
    streetLightStates[4].setState();
    // 
    currentState = streetLightStates[4].next;
  }
  function tickHendler() {
    // if (pressed) {
    //   currentState = 4;
    //   pressed = false;
    // }
    streetLightStates[currentState].setState();
    setTimeout(tickHendler, streetLightStates[currentState].interval);
    currentState = streetLightStates[currentState].next;
  }

  function handlerWalk() {
    pressed = true;
  }
  
  function handleTimer() {
    pressed = true;
  }

tickHendler();
setTimeout(a, 0);


// ======Мой код======

// const btn = document.getElementById('button');
// let circles = document.querySelectorAll('.disabled');
// let counter = 0;
// let paused;
// let isPaused = false;

// function timerStart () {
//     cntValue = cntValue - 1;
//     cnt.innerHTML = cntValue;
//     if (cntValue <= 0) {
//         timer = clearInterval(timer);
//     }
// };

// function handlerWalk() {
//     timer = clearInterval(timer);
//     cntValue = 10;
//     if (cntValue) {
//       cnt.textContent = cntValue;
//       timer = setInterval(timerStart, 1000);
//     };
// }
// btn.addEventListener('click', () => { 
//     timer = clearInterval(timer);
//     cntValue = 10;
//     if (cntValue) {
//       cnt.textContent = cntValue;
//       timer = setInterval(timerStart, 1000);
//     };
// });

// btn.addEventListener('click', () => {
//     paused = setTimeout(() => {
//         for (let i = 0; i < circles.length; i++) {
//             circles[0].classList.add('active');
//             circles[1].classList.remove('active');
//             circles[2].classList.remove('active');
//         };
//     }, 0);
// });

// setInterval(startLights, 5000);

// function startLights () {
            
//     for (let i = 0; i < circles.length; i++) {
//         circles[i].classList.remove('active');
//     }
                
//     if (counter > circles.length - 1)
//     counter = 0;
//     circles[counter].classList.add('active');
//     counter++;
// };






