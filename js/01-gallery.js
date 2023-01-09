function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function getRandomNumb() {
return `${Math.floor(Math.random() * (90 - 1) + 1)}%`;
}
console.log(getRandomNumb())


const alldiv = document.querySelector(`.game`)
const divball = document.querySelector(`.div-ball`)
const start = document.querySelector(`.start`)
const ballx2 = document.querySelector(`.div-ballx2`)
const addClass = document.querySelector(`.button-ball`)
const p = document.querySelector(`p`)





start.addEventListener(`click`, startGame)
function startGame() {
    divball.classList.add(`button-ball`)
    divball.style.top = getRandomNumb();
    divball.style.left = getRandomNumb();
    ballx2.style.backgroundColor = getRandomHexColor();
    start.style.opacity =  0;
}

divball.addEventListener(`click`, chancheBall)
function chancheBall() {
    divball.classList.toggle(`button-ball`)
    ballx2.style.top = getRandomNumb();
    ballx2.style.left = getRandomNumb();
    ballx2.style.backgroundColor = getRandomHexColor();
    if (!divball.classList.contains(`button-ball`)) {
        ballx2.classList.add(`button-ball`)
        
    }
}

ballx2.addEventListener(`click`, removeGame)

function removeGame() {
    ballx2.classList.toggle(`button-ball`)
    divball.classList.toggle(`button-ball`)
    divball.style.top = getRandomNumb();
    divball.style.left = getRandomNumb();
    divball.style.backgroundColor = getRandomHexColor();
}
// start.addEventListener(`click`, StartGame)
// function StartGame() {
    
// }
