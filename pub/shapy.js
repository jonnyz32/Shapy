
drag = (e) => {
    element = e.target
    currentX = element.getBoundingClientRect().left
    currentY = element.getBoundingClientRect().top
    console.log("currentX,Y", currentX, currentY)
    clickX = e.clientX
    clickY = e.clientY
    console.log("clickX,Y", clickX, clickY)
    console.log(element)

mousemove = (e) => {

    let newX = e.clientX + window.scrollX - (clickX - currentX)
    let newY = e.clientY + window.scrollY - (clickY - currentY)

    console.log("newX", newX)
    console.log("newY", newY)


    element.style.left = newX + "px"
    element.style.top = newY + "px"

    console.log("element.left",element.style.left)
    console.log("element.top",element.style.top)

}

window.addEventListener("mousemove", mousemove)

}   

mouseup = (e) => {
    window.removeEventListener("mousemove", mousemove)
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
}

rotateElements = (className, stopElement) => {
  let  elements = document.querySelectorAll('.' + className)
    
    const intervalId = setInterval(() => {
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
        }}, 4000)

        stopElement.addEventListener("click", () => stopFunction(intervalId))                    
    }

    stopFunction = (interval) =>{
        console.log("stopping function")
        clearInterval(interval)
        return

    }


animateSpriteWithId = ( id, name, num, interval, stopElement) => {
    let img = [document.querySelector("#" + id)]
    animateSpriteLogic(img, name, num, interval, stopElement)
}   

animateSpriteWithClass = (class_, name, num, interval, stopElement) => {
    let images = document.querySelectorAll("." + class_)
    animateSpriteLogic(images, name, num, interval, stopElement)

}   

animateSpriteLogic = (images, name, num, interval, stopElement) => {
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

    stopElement.addEventListener("click", () => stopFunction(intervalId)) 

}
window.addEventListener("mouseup", mouseup)
