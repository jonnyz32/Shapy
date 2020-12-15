
// //  To add rotation funcitonality to an object, call Shapy.rotateable on the desired element

// const shapy = new Shapy()
// const element = document.querySelector(".elem")
// const elementRotate = shapy.rotateable(element)



// // To create a resizeable object, call Shapy.resizeable on the desired element

// const shapy = new Shapy()
// const element = document.querySelector(".elem")
// const elementResize = shapy.resizeable(element)


// // To create a draggable object, call Shapy.draggable on the desired element

// const shapy = new Shapy()
// const element = document.querySelector(".elem")
// const elementDrag = shapy.draggable(element)


// // If the element has a parent with position:relative, use the draggableRelative
// // method instead

// const shapy = new Shapy()
// const element = document.querySelector(".elem")
// const elementDrag = shapy.DraggableRelative(element)


// // To arrange a class of elements in a circle shape, use the positionElementCircle 
// // method. This code will arrange all elements of the Moon class in a circle with 
// // center given by (300px,500px) and a radius of 200. The elements of the desired 
// // class must have position absolute.

// const shapy = new Shapy()
// shapy.positionElementCircle('Moon', 300, 500, 200)


// // To arrange a class of elements in a rectangle shape, use the positionElementSquare method.
// // This code will arrange all elements of the MoonSquare class in a rectangle with center given 
// // by (900px,500px) and a width and height of 500px x 200px. The elements of the desired class 
// // must have position absolute.

// const shapy = new Shapy()
// shapy.positionElementSquare('MoonSquare', 900, 500, 350, 350)


// // To rotate each element in a class to the position of the next element, use the rotate Elements method.
// // This code will rotate all the elements of the moon class to the next positioned moon on a 4 second
// // interval with a transition property of linear. To stop the rotation, click on the StopButton element.

// const shapy = new Shapy()
// rotateElements("Moon", StopButton, 4000, "linear")

// // Here's the same function but using a different transition property

// const shapy = new Shapy()
// rotateElements("MoonSquare", rightStopButton, 4000, "ease")


// // To perform a sprite animation, pass in the id of the html element holding the image, the 
// // image prefix name, the number of images in the animation, the interval on which to
// // display the next image, a stop element (press to stop the animation), and a file extension
// // to the animateSpriteWithId method. Below is an example where an html element with id
// // knightSpright is having it's image changed every 70ms. The path to the images is given
// // as ./knightAttackSprites/tile and there is 22 images in the folder. Each image is named 
// // as tile0.png, tile1.png, tile2.png,...tile21.png

// const shapy = new Shapy()
// shapy.animateSpriteWithId('knightSprite', './knightAttackSprites/tile', 22, 70, stopAnimationId, '.png')


// // To perform the same animation but on a class of elements, we can use the animateSpriteWithClass
// // function which has the same parameters. Here the element class is knightSpriteC

// const shapy = new Shapy()
// animateSpriteWithClass('knightSpriteC', './knightAttackSprites/tile', 22, 70, stopAnimationClass)






const shapy = new Shapy()

window.onload = function(){
    shapy.positionElementCircle('Moon', 200, 300, 200)
    shapy.positionElementSquare('MoonSquare', 800, 300, 350, 350)
}

// let moon0 = document.querySelector(".Moon")
// console.log(moon0)
// moon0.classList.add("Animateable")
// console.log(moon0.currentlyAnimating)



const leftStartButton = document.querySelector(".rotationButtonsLeft .green")
const leftStopButton = document.querySelector(".rotationButtonsLeft .red")
const rightStartButton = document.querySelector(".rotationButtonsRight .green")
const rightStopButton = document.querySelector(".rotationButtonsRight .red")

leftStartButton.addEventListener("click", () => shapy.rotateElements("Moon", leftStopButton, 4000, "linear"))
rightStartButton.addEventListener("click", () => shapy.rotateElements("MoonSquare", rightStopButton, 4000, "ease"))

const startAnimationClass =  document.querySelector(".animations .withClass .green")
const stopAnimationClass =  document.querySelector(".animations .withClass .red")

startAnimationClass.addEventListener("click", () => {
    shapy.animateSpriteWithClass('knightSpriteC', './knightAttackSprites/tile', 22, 70, stopAnimationClass, '.png')
    }
)

const startAnimationId =  document.querySelector(".animations .withId .green")
const stopAnimationId =  document.querySelector(".animations .withId .red")

startAnimationId.addEventListener("click", () => {
    shapy.animateSpriteWithId('knightSprite', './knightAttackSprites/tile', 22, 70, stopAnimationId, '.png')
    }
)

const biggest = document.querySelector(".biggest")
const medium = document.querySelector(".medium")
const small = document.querySelector(".small")


const smallDrag = shapy.draggableRelative(small)
const mediumDrag = shapy.draggableRelative(medium)
const biggestDrag = shapy.draggableRelative(biggest)
const testRotate = document.querySelector(".testRotate")
const smallRotate = shapy.rotateable(testRotate)

const resizeObject = document.querySelector(".resizeObject")
const resizeInstance = shapy.resizeable(resizeObject)
