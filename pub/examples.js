window.onload = function(){
    positionElementCircle('Moon', 300, 500, 200)
    positionElementSquare('MoonSquare', 900, 500, 350, 350)
}

// let moon0 = document.querySelector(".Moon")
// console.log(moon0)
// moon0.classList.add("Animateable")
// console.log(moon0.currentlyAnimating)



const leftStartButton = document.querySelector(".rotationButtonsLeft .green")
const leftStopButton = document.querySelector(".rotationButtonsLeft .red")
const rightStartButton = document.querySelector(".rotationButtonsRight .green")
const rightStopButton = document.querySelector(".rotationButtonsRight .red")

leftStartButton.addEventListener("click", () => rotateElements("Moon", leftStopButton))
rightStartButton.addEventListener("click", () => rotateElements("MoonSquare", rightStopButton))

const startAnimationClass =  document.querySelector(".animations .withClass .green")
const stopAnimationClass =  document.querySelector(".animations .withClass .red")

startAnimationClass.addEventListener("click", () => {
    animateSpriteWithClass('knightSpriteC', './knightAttackSprites/tile', 22, 70, stopAnimationClass)
    }
)

const startAnimationId =  document.querySelector(".animations .withId .green")
const stopAnimationId =  document.querySelector(".animations .withId .red")

startAnimationId.addEventListener("click", () => {
    animateSpriteWithId('knightSprite', './knightAttackSprites/tile', 22, 70, stopAnimationId)
    }
)

const biggest = document.querySelector(".biggest")
const medium = document.querySelector(".medium")
const small = document.querySelector(".small")

biggest.addEventListener("mousedown", () => drag(event))
medium.addEventListener("mousedown", () => drag(event))
// small.addEventListener("mousedown", () => drag(event))

const smallDrag = new Draggable(small)
const testRotate = document.querySelector(".testRotate")
const smallRotate = new Rotateable(testRotate)
