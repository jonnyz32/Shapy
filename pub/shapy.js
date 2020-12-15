
(function(global, document, $) { 

function drag(e) {
    e.preventDefault()
    const element = e.target
    const currentX = element.getBoundingClientRect().left
    const currentY = element.getBoundingClientRect().top
    const clickX = e.clientX
    const clickY = e.clientY
    console.log("clickX,Y", clickX, clickY)
    console.log(element)
    

    function mouseMove (e) {

        let newX = e.clientX + window.scrollX - (clickX - currentX)
        let newY = e.clientY + window.scrollY - (clickY - currentY)
        console.log("newX,newY", newX, newY)
        element.style.left = newX + "px"
        element.style.top = newY + "px"
    }

    function mouseUp() {
        console.log("mouse up")
        window.removeEventListener("mousemove", mouseMove)
    }

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mouseup", mouseUp)

}  

function rotate(e){
    e.preventDefault()
    element = e.target
    console.log(element)
    const origX = e.clientX
    const origY = e.clientY
    console.log("origx, origy", origX, origY)
    let theta = 0


 


    function mouseMove (e) {
        console.log("in mousemove, element is:", element)
        let newX = e.clientX
        let newY = e.clientY

        console.log("newX, newY", newX, newY)


        let xOffset = newX - origX
        let yOffset = newY - origY

     

        theta = Math.atan(yOffset/xOffset)
        if (theta > 1.56){
            theta = -theta
        }


        console.log("xoff, yoff", xOffset, yOffset)
        console.log("theta is", theta)
        element.style.transform = "rotate(" + theta + "rad)"
        
    }

    function mouseUp() {
        console.log("mouse up")
        window.removeEventListener("mousemove", mouseMove)
    }

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mouseup", mouseUp)

}

function resize(e, handler){
    e.preventDefault()
    const element = e.target.parentElement
    const currentX = element.getBoundingClientRect().left
    const currentY = element.getBoundingClientRect().top
    const parentXOffset = element.parentElement.offsetLeft
    const parentYOffset = element.parentElement.offsetTop
    const elementWidth = element.clientWidth
    const elementHeight = element.clientHeight


    console.log(element)
    console.log("currentY, element height, y + elem height", currentY, elementHeight, currentY + elementHeight)

    function mouseMove (e) {
        if  (handler === "ne"){
            console.log("in ne")
            element.style.width = e.clientX - currentX + "px"
            let newTop = e.clientY + scrollY - parentYOffset
            console.log("newTop", newTop)
            element.style.top = Math.min(newTop, currentY + elementHeight + scrollY- parentYOffset) + "px"
            element.style.height = elementHeight + (currentY - e.clientY) + "px"

        }

        else if (handler === "se"){
            console.log("in se")
            element.style.width = e.clientX - currentX + "px"
            element.style.height = e.clientY - currentY + "px"
            console.log("width", e.clientX - currentX)
            console.log("height", e.clientY - currentY)

        }

        else if (handler === "sw"){
            console.log("in sw")
            element.style.height = e.clientY - currentY + "px"
            let newLeft = e.clientX
            element.style.left = Math.min(newLeft - parentXOffset, currentX + elementWidth - parentXOffset) + "px"
            element.style.width = elementWidth + (currentX - newLeft) + "px"

        }

        else if (handler === "nw"){
            console.log("in nw")
            let newTop = e.clientY + scrollY - parentYOffset
            console.log("newTop", newTop)
            element.style.top = Math.min(newTop, currentY + elementHeight + scrollY- parentYOffset) + "px"
            element.style.height = elementHeight + (currentY - e.clientY) + "px"

            let newLeft = e.clientX
            element.style.left = Math.min(newLeft - parentXOffset, currentX + elementWidth - parentXOffset) + "px"
            element.style.width = elementWidth + (currentX - newLeft) + "px"

        }

    }

    function mouseUp() {
        console.log("mouse up")
        window.removeEventListener("mousemove", mouseMove)
    }

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mouseup", mouseUp)

}

function dragRelative(e){
    e.preventDefault()
    const element = e.target
    const elemWidth = element.clientWidth
    const elemHeight = element.clientHeight
    const currentX = element.getBoundingClientRect().left
    const currentY = element.getBoundingClientRect().top
    const clickX = e.clientX
    const clickY = e.clientY
    const parentXOffset = element.parentElement.offsetLeft
    const parentYOffset = element.parentElement.offsetTop
    const parentWidth = element.parentElement.clientWidth
    const parentHeight = element.parentElement.clientHeight
    console.log("clickX,Y", clickX, clickY)
    console.log(element)
    

    function mouseMove (e) {

        let newX = e.clientX + window.scrollX - (clickX - currentX + parentXOffset)
        let newY = e.clientY + window.scrollY - (clickY - currentY + parentYOffset)
        console.log("newX,newY", newX, newY)

        if (newX + elemWidth >= parentWidth ){
            newX -= 10
            mouseUp()
        }
        if ( newX <= 0 ){
            newX += 10
            mouseUp()
        }
        if (newY + elemHeight >= parentHeight ){
            newY -= 10
            mouseUp()
        }
        if (newY <= 0){
            newY += 10
            mouseUp()
        }
        console.log("elemWidth", elemWidth)
        element.style.left = newX + "px"
        element.style.top = newY + "px"
    }

    function mouseUp() {
        console.log("mouse up")
        window.removeEventListener("mousemove", mouseMove)
    }

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mouseup", mouseUp)

}  

function stopFunction(elements, intervalId){
    console.log("stopping function")
    elements.forEach((element) => {
        element.currentlyAnimating = false
        element.style.transition = 'none'

    })
    clearInterval(intervalId)
    
    return

}

function animateSpriteLogic(images, name, num, interval, stopElement, ext){
    let imgNum = 0

    if (images[0].currentlyAnimating){
        return
    }
  
    images.forEach((image) => {
        image.currentlyAnimating = true
    })

    let intervalId = setInterval(()=>{
        
        try{
            images.forEach((img) => {
                img.src = name + imgNum + ext
                

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

    stopElement.addEventListener("click", () => stopFunction(images, intervalId)) 

}



function Shapy() {
    
    


}



Shapy.prototype = {

    
    draggable: function(object) {
            object.addEventListener("mousedown", drag)
    },
    
    draggableRelative: function(object) {
            object.addEventListener("mousedown", dragRelative)
    },
    
    
    
    
    rotateable: function(object) {
            object.addEventListener("mousedown", rotate)
    },
    
    resizeable: function(object) {
            const ne = document.createElement('div')
            const se = document.createElement('div')
            const sw = document.createElement('div')
            const nw = document.createElement('div')
    
            ne.classList.add("handle")
            ne.classList.add("ne")
    
            se.classList.add("handle")
            se.classList.add("se")
    
            sw.classList.add("handle")
            sw.classList.add("sw")
    
            nw.classList.add("handle")
            nw.classList.add("nw")
    
         
            object.appendChild(ne)
            object.appendChild(se)
            object.appendChild(sw)
            object.appendChild(nw)
    
            const handles = document.querySelectorAll('.handle')
    
            handles.forEach(handle => {
                handle.style.position = "absolute"
                handle.style.borderRadius = "50%"
                handle.style.width = "10px";
                handle.style.height = "10px";
                handle.style.backgroundColor = "white";
                handle.style.border = "1px solid black";
    
            })
    
            nw.style.top = "-5px"
            nw.style.left = "-5px"
    
            ne.style.top = "-5px"
            ne.style.right = "-5px"
    
            sw.style.bottom = "-5px"
            sw.style.left = "-5px"
    
            se.style.bottom = "-5px"
            se.style.right = "-5px"
    
            ne.addEventListener("mousedown", () => resize(event, "ne"))
            se.addEventListener("mousedown", () => resize(event, "se"))
            sw.addEventListener("mousedown", () => resize(event, "sw"))
            nw.addEventListener("mousedown", () => resize(event, "nw"))
    
    
    
            object.addEventListener("mousedown", resize)
        },
    
    
       
    
    positionElementCircle: function(className, centerX, centerY, radius){
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
    },
    
    
    
    
    
    
    positionElementSquare: function(className, centerX, centerY, width, height){
        const elements = document.querySelectorAll('.' + className)
        console.log(elements)
    
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
            theta += interval
            i += 1
            console.log("theta :",theta)
        })
    },
    
    
    
    
    
    rotateElements: function(className, stopElement, interval, transition){
      let elements = document.querySelectorAll('.' + className)
      if (elements[0].currentlyAnimating){
          return
      }
    
      elements.forEach((element) => {
          element.currentlyAnimating = true
          element.style.transition = transition + " " + 4000 + "ms"
      })
      rotate = () => {
        let position0 = elements[0].style.left
        let position1 = elements[0].style.top
        for (let i = 0; i < elements.length; i++){   
            if (i < elements.length - 1){
                console.log("i:",i)
                console.log("element",elements[i])
                elements[i].style.left = elements[i + 1].style.left
                elements[i].style.top = elements[i + 1].style.top
            }
            else{ 
                console.log("in else")
                console.log("position0:", position0)
                console.log("position1:", position1)
                elements[i].style.left = position0
                elements[i].style.top = position1
            }
        }}
        
        rotate()
        let intervalId = setInterval(rotate, interval)
    
        stopElement.addEventListener("click", () => stopFunction(elements, intervalId)) 
            
        },
    
    
    
    
    
    animateSpriteWithId: function( id, name, num, interval, stopElement, ext){
        let img = [document.querySelector("#" + id)]
        animateSpriteLogic(img, name, num, interval, stopElement, ext)
    },   
    
    
    
    
    
    animateSpriteWithClass: function(class_, name, num, interval, stopElement, ext){
        let images = document.querySelectorAll("." + class_)
        animateSpriteLogic(images, name, num, interval, stopElement, ext)
    
    }
    

}



global.Shapy = global.Shapy || Shapy

})(window, window.document, $);
