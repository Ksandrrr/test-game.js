function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function getRandomNumb() {
return `${Math.floor(Math.random() * (90 - 1) + 1)}%`;
}



const alldiv = document.querySelector(`.game`)
const divball = document.querySelector(`.div-ball`)
const start = document.querySelector(`.start`)
const ballx2 = document.querySelector(`.div-ballx2`)
const addClass = document.querySelector(`.button-ball`)
const p = document.querySelector(`.numb`)

let number = 0;
console.log(p)
let random = getRandomNumb();



p.style.opacity = 0;

start.addEventListener(`click`, startGame)
function startGame() {
    divball.classList.add(`button-ball`)
    divball.style.top = 0;
    divball.style.left = getRandomNumb();
    ballx2.style.backgroundColor = getRandomHexColor();
divball.style.transform = "translatey(651%)";
    divball.style.transition = "transform 4000ms ease";
//     transform: translatey(651%);
//   transition: transform 3000ms ease;
    start.style.opacity = 0;
    p.style.opacity = 1;
    p.textContent = number
    number += 1;
   
}

divball.addEventListener(`click`, chancheBall)
function chancheBall() {
    p.textContent = number
    divball.classList.toggle(`button-ball`)
    ballx2.style.top = 0;
    ballx2.style.left = getRandomNumb();
    ballx2.style.backgroundColor = getRandomHexColor();
    number += 1;
    ballx2.style.transform = "translatey(651%)";
    ballx2.style.transition = "transform 4000ms ease";
    divball.style.transform = "translatey(-651%)";
    divball.style.transition = "transform 4000ms ease";
    
    if (!divball.classList.contains(`button-ball`)) {
        ballx2.classList.add(`button-ball`)  

    }
   
    if (number >= 10) {
        ballx2.style.transition = "transform 2500ms ease";
        divball.style.transition = "transform 2500ms ease";
    } if (number >= 30) {
        ballx2.style.transition = "transform 2100ms ease";
        divball.style.transition = "transform 2100ms ease";
    }
    if (number >= 50) {
        ballx2.style.transition = "transform 1800ms ease";
        divball.style.transition = "transform 1800ms ease";
    }
     if (number >= 70) {
        ballx2.style.transition = "transform 1500ms ease";
        divball.style.transition = "transform 1500ms ease";
     }
    if (number >= 80) {
        ballx2.style.transition = "transform 1200ms ease";
        divball.style.transition = "transform 1200ms ease";
    }
    if (number >= 100) {
        ballx2.style.transition = "transform 1000ms ease";
        divball.style.transition = "transform 1000ms ease";
    }
    if (number >= 115) {
        alert(`You Win`)
        start.style.opacity = 1;
        divball.classList.remove(`button-ball`)
        ballx2.classList.remove(`button-ball`)
        number = 0
    }
    

}

ballx2.addEventListener(`click`, removeGame)

function removeGame() {
    ballx2.classList.toggle(`button-ball`)
    divball.classList.toggle(`button-ball`)
    divball.style.top = 0;
    divball.style.left = getRandomNumb();
    divball.style.backgroundColor = getRandomHexColor();
    p.textContent = number
    number += 1;
    ballx2.style.transform = "translatey(-651%)";
    ballx2.style.transition = "transform 4000ms ease";
    divball.style.transform = "translatey(651%)";
    divball.style.transition = "transform 4000ms ease";
    if (number >= 10) {
        ballx2.style.transition = "transform 2500ms ease";
        divball.style.transition = "transform 2500ms ease";
    } if (number >= 30) {
        ballx2.style.transition = "transform 2100ms ease";
        divball.style.transition = "transform 2100ms ease";
    }
    if (number >= 50) {
        ballx2.style.transition = "transform 1800ms ease";
        divball.style.transition = "transform 1800ms ease";
    }
     if (number >= 70) {
        ballx2.style.transition = "transform 1500ms ease";
        divball.style.transition = "transform 1500ms ease";
     }
    if (number >= 80) {
        ballx2.style.transition = "transform 1200ms ease";
        divball.style.transition = "transform 1200ms ease";
    }
    if (number >= 100) {
        ballx2.style.transition = "transform 1000ms ease";
        divball.style.transition = "transform 1000ms ease";
    }
    if (number >= 110) {
        alert(`You Win`)
    }
    
}