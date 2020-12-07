
// //  To add rotation to the elem class, the following code will work
// const element = document.querySelector(".elem")
// const elementRotate = new Rotateable(element)

// // If you just want to add rotational functionality to an object without
// // creating a new Rotatable object, just add an event listener
// const element = document.querySelector(".elem")
// element.addEventListener("mousedown", rotate)


// // To create a resizeable object, just create a new instance of the resizeable 
// // class

// const element = document.querySelector(".elem")
// const elementResize = new Resizeable(element)


// // To create a draggable object, just create a new instance of the draggable 
// // class

// const element = document.querySelector(".elem")
// const elementDrag = new Draggable(element)

// // If the element has a parent with position:relative, use the DraggableRelative
// // class instead

// const element = document.querySelector(".elem")
// const elementDrag = new DraggableRelative(element)

// // If you just want to add an event listener to an existing object, you can do that
// // as well
// const element = document.querySelector(".elem")
// element.addEventListener("mousedown", drag) // or element.addEventListener("mousedown", dragRelative)

// // To arrange a class of elements in a circle shape, use the positionElementCircle function.
// // This code will arrange all elements of the Moon class in a circle with center given by (300px,500px)
// // and a radius of 200. The position of the moons will be set to absolute.
// positionElementCircle('Moon', 300, 500, 200)

// // To arrange a class of elements in a rectangle shape, use the positionElementSquare function.
// // This code will arrange all elements of the MoonSquare class in a rectangle with center given by (900px,500px)
// // and a width and height of 500px x 200px. The position of the moons will be set to absolute.
// positionElementSquare('MoonSquare', 900, 500, 350, 350)

// // To rotate each element in a class to the position of the next element, use the rotate Elements function.
// // This code will rotate all the elements of the moon class to the next positioned moon on a 4 second interval
// // with a transition property of linear. To stop the rotation, click on the StopButton element
// rotateElements("Moon", StopButton, 4000, "linear")

// // Here's the same function but using a different transition property

// rotateElements("MoonSquare", rightStopButton, 4000, "ease")

// // To perform a sprite animation, pass in the id of the html element holding the image, the 
// // image prefix name, the number of images in the animation, the interval on which to
// // display the next image, a stop element (press to stop the animation), and a file extension
// // to the animateSpriteWithId function. Below is an example where an html element with id
// // knightSpright is having it's image changed every 70ms. The path to the images is given
// // as ./knightAttackSprites/tile and there is 22 images in the folder. Each image is named 
// // as tile0.png, tile1.png, tile2.png,...tile21.png

// animateSpriteWithId('knightSprite', './knightAttackSprites/tile', 22, 70, stopAnimationId, '.png')

// // To perform the same animation but on a class of elements, we can use the animateSpriteWith
// // class function which has the same parameters. Here the element class is knightSpriteC

// animateSpriteWithClass('knightSpriteC', './knightAttackSprites/tile', 22, 70, stopAnimationClass)








window.onload = function(){
    positionElementCircle('Moon', 200, 300, 200)
    positionElementSquare('MoonSquare', 800, 300, 350, 350)
}

// let moon0 = document.querySelector(".Moon")
// console.log(moon0)
// moon0.classList.add("Animateable")
// console.log(moon0.currentlyAnimating)



const leftStartButton = document.querySelector(".rotationButtonsLeft .green")
const leftStopButton = document.querySelector(".rotationButtonsLeft .red")
const rightStartButton = document.querySelector(".rotationButtonsRight .green")
const rightStopButton = document.querySelector(".rotationButtonsRight .red")

leftStartButton.addEventListener("click", () => rotateElements("Moon", leftStopButton, 4000, "linear"))
rightStartButton.addEventListener("click", () => rotateElements("MoonSquare", rightStopButton, 4000, "ease"))

const startAnimationClass =  document.querySelector(".animations .withClass .green")
const stopAnimationClass =  document.querySelector(".animations .withClass .red")

startAnimationClass.addEventListener("click", () => {
    animateSpriteWithClass('knightSpriteC', './knightAttackSprites/tile', 22, 70, stopAnimationClass, '.png')
    }
)

const startAnimationId =  document.querySelector(".animations .withId .green")
const stopAnimationId =  document.querySelector(".animations .withId .red")

startAnimationId.addEventListener("click", () => {
    animateSpriteWithId('knightSprite', './knightAttackSprites/tile', 22, 70, stopAnimationId, '.png')
    }
)

const biggest = document.querySelector(".biggest")
const medium = document.querySelector(".medium")
const small = document.querySelector(".small")

// biggest.addEventListener("mousedown", () => drag(event))
// medium.addEventListener("mousedown", () => drag(event))
// small.addEventListener("mousedown", () => drag(event))

const smallDrag = new DraggableRelative(small)
const mediumDrag = new DraggableRelative(medium)
const biggestDrag = new DraggableRelative(biggest)
const testRotate = document.querySelector(".testRotate")
const smallRotate = new Rotateable(testRotate)

const resizeObject = document.querySelector(".resizeObject")
// const resizeInstance = new dragAndResize(resizeObject)
const resizeInstance = new Resizeable(resizeObject)

// const resizePtag = document.querySelector('.stretchDemo p')
// resizePtag.addEventListener("click", (event) => {
//     event.preventDefault()
// })
