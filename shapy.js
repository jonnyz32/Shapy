
//   let center = document.querySelector('.center')


// let fs = require('fs')

drag = (e) => {
    e.preventDefault()

mousemove = (e) => {
    e.preventDefault()

    let newX = e.clientX
    let newY = e.clientY

    center.style.left = newX + "px"
    center.style.top = newY + "px"


}


window.addEventListener("mousemove", mousemove)

}   

mouseup = (e) => {
    e.preventDefault()
    window.removeEventListener("mousemove", mousemove)
}
     

// center.addEventListener("mousedown", drag)
// window.addEventListener("mouseup", mouseup)

function rotateable(elements){
    this.elements= elements;
    this.rotate = rotateElements(className, stopElement);

}

  

positionElementCircle = (className, centerX, centerY, radius) =>{
    const elements = document.querySelectorAll('.' + className)

    let theta = 0
    let interval = (2 * Math.PI) / elements.length
    console.log(interval)
    elements.forEach((element) =>{
        let Left = centerX + radius * Math.cos(theta)
        let Top = centerY + radius * Math.sin(theta)
        console.log("left :", Left)
        console.log("Top :", Top)
        element.style.left = Left + "px"
        element.style.top = Top + "px"
       
        theta += interval
        console.log("theta :",theta)
    })
}

positionElementSquare = (className, centerX, centerY, width, height) =>{
    const elements = document.querySelectorAll('.' + className)
    console.log(elements)
    // const className = document.querySelector('.center')
    // elements.style.left = centerX + 'px'
    // elements.style.top = centerY + 'px'

    
    let interval = (2 * Math.PI) / elements.length
    console.log(interval)
    let theta1 = Math.atan(height/width)
    let theta2 = Math.PI - theta1
    let theta3 = Math.PI + theta1
    let theta4 = 2 * Math.PI - theta1
    let theta = theta1 + .0001
    console.log("theta1: ", theta1)
    console.log("theta2: ", theta2)
    console.log("theta3: ", theta3)
    console.log("theta4: ", theta4)

    let i = 0;
    elements.forEach((element, i) =>{
        let y = null;
        let x = null;
        console.log("circle:", i);
        
      
        if ( theta1 < theta && theta < theta2){
            console.log("in case1")
            console.log("slope: ", Math.tan(theta))
            y = centerY - height / 2
            x = (( height / 2 + Math.tan(theta) * centerX)/Math.tan(theta)) 

        }      
        else if ( theta2 < theta && theta < theta3){
            console.log("in case2")
            console.log("slope: ", Math.tan(theta))
            y = 2 * centerY - (Math.tan(theta) * (centerX - width/2) + centerY - Math.tan(theta)*centerX)
            x = centerX - width/2
        }
            
        
        else if ( theta3 < theta && theta < theta4){
            console.log("in case3")
            console.log("slope: ", Math.tan(theta))
            y = centerY + height / 2
            x = (( -1 * height / 2 + Math.tan(theta) * centerX)/Math.tan(theta)) 

        }
        else if  (theta4 < theta || theta < theta1){
            console.log("in case 4")
            console.log("slope: ", Math.tan(theta))
            y = Math.tan(theta) * (centerX - width/2) + centerY - Math.tan(theta)*centerX
            x = centerX + width/2

        }   
        
        console.log("y :", y)
        console.log("x :", x)
        element.style.left = x + "px"
        element.style.top = y + "px"
        // element.innerHTML=i
       
        theta += interval
        i += 1
        console.log("theta :",theta)
    })
}

rotateElements = (className, stopElement) => {
    elements = document.querySelectorAll('.' + className)
    
    const interval = setInterval(() => {
        let position0 = elements[0].style.left
        let position1 = elements[0].style.top
        for (let i = 0; i < elements.length; i++){   
            if (i < elements.length - 1){
                console.log("i:",i)
                console.log("element",elements[i])
                // elements[i].animate({left: elements[i + 1].style.left,
                //                     top: elements[i + 1].style.top})
               elements[i].style.left = elements[i + 1].style.left
                elements[i].style.top = elements[i + 1].style.top
            }
            else{ 
                console.log("in else")
                console.log("position0:", position0)
                console.log("position1:", position1)
                // elements[i].animate({left: '100px',
                //     top: '500px'})
                elements[i].style.left = position0
                elements[i].style.top = position1
            }
        }}, 4000)

        stopFunction = () =>{
            console.log("stopping function")
            clearInterval(interval)
            return

        }

        // const stopElement = document.querySelector('.' + stopElement);
        stopElement.addEventListener("click", stopFunction )                    
    }

    rotateElements2 = (className, stopElement) => {
        elements = document.querySelectorAll('.' + className)
        
        const interval = setInterval(() => {
            let position0 = elements[0].style.left
            let position1 = elements[0].style.top
            for (let i = 0; i < elements.length; i++){   
                if (i < elements.length - 1){
                    console.log("i:",i)
                    console.log("element",elements[i])
                    // elements[i].animate({left: elements[i + 1].style.left,
                    //                     top: elements[i + 1].style.top})
                   elements[i].style.left = elements[i + 1].style.left
                    elements[i].style.top = elements[i + 1].style.top
                }
                else{ 
                    console.log("in else")
                    console.log("position0:", position0)
                    console.log("position1:", position1)
                    // elements[i].animate({left: '100px',
                    //     top: '500px'})
                    elements[i].style.left = position0
                    elements[i].style.top = position1
                }
            }}, 4000)
    
            stopFunction = () =>{
                console.log("stopping function")
                clearInterval(interval)
                return
    
            }
    
            // const stopElement = document.querySelector('.' + stopElement);
            stopElement.addEventListener("click", stopFunction )                    
        }

animateSpriteWithId = ( id, name, num, interval) => {
    let img = [document.querySelector("#" + id)]
    animateSpriteLogic(img, name, num, interval)
}   

animateSpriteWithClass = (class_, name, num, interval) => {
    let images = document.querySelectorAll("." + class_)
    animateSpriteLogic(images, name, num, interval)

}   

animateSpriteLogic = (images, name, num, interval) => {
    // let img = img
    let imgNum = 0
    let intervalId = setInterval(()=>{
        
        try{
            images.forEach((img) => {
                img.src = name + imgNum + '.png'
                // if (!fs.existsSync('path/to/fileThatMightNotExist.json')) {
                //     clearInterval(intervalId)
                    
                //   }
            })
        } 
        catch (e){
            console.log(e)
            clearInterval(intervalId)
        }
        

        if (imgNum != num - 1){
            imgNum += 1
        }
        else{
            imgNum = 0
        }
             
    },interval)

}

window.onload = function(){
    positionElementCircle('Moon', 300, 500, 200)
    positionElementSquare('MoonSquare', 900, 500, 350, 350)
}
const Moons = document.querySelectorAll('.Moon');

Moons[0].addEventListener("click", () => rotateElements("Moon"))



  


// drag = (e) => {
//     let mouseX = null;
//     let mouseY = null;

//     setInterval(() => {
//         if (e.type !== "mouseUp"){
//             let mouseX = e.clientX;
//             let mouseY = e.clientY;
//             console.log(e)
//             console.log("clientX:",mouseX)
//             console.log("clientY:",mouseY)

//     }}, 100
//         )
    
//     return mouseX, mouseY
// }   


        
            

//    while (true) {
//        console.log("i:", i)
//        if (i < elements.length - 1){
//         elements[i].style.left = elements[i + 1].style.left
//         elements[i].style.top = elements[i + 1].style.top
//         setTimeout(() => {
//             i += 1
//         }, 3000)
        
//        }
//        else {
//         elements[i].style.left = elements[0].style.left
//         elements[i].style.top = elements[0].style.top
//         setTimeout(() => {
//             i = 0 
//         }, 3000)
//        }
      
//    }
