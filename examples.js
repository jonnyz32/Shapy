window.onload = function(){
    positionElementCircle('Moon', 300, 500, 200)
    positionElementSquare('MoonSquare', 900, 500, 350, 350)
}

const leftStartButton = document.querySelector(".rotationButtonsLeft .green")
const leftStopButton = document.querySelector(".rotationButtonsLeft .red")
const rightStartButton = document.querySelector(".rotationButtonsRight .green")
const rightStopButton = document.querySelector(".rotationButtonsRight .red")

leftStartButton.addEventListener("click", () => rotateElements("Moon", leftStopButton))
rightStartButton.addEventListener("click", () => rotateElements2("MoonSquare", rightStopButton))
