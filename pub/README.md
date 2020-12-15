# js-library-zakjonat

Library name: Shapy
My library will aid developers in applying geometric properties and animations to the elements of their webpage. The functionality that will be included will be the ability to rotate shapes, align dom elements according to predefined geometric patterns, defining element animations, having user-moveable elements, spinnable elements, and resizeable elements.  

Link to landing page: https://stark-bastion-08658.herokuapp.com/examples.html
Link to documentation: https://stark-bastion-08658.herokuapp.com/api.html


Getting started:

Here are the steps to get started with shapy.js:

1. Download the code from the github repository.
2. In the head of your html page, add the following two lines in order:  
    <script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script><br>
    <script defer src="shapy.js" ></script>

    The first is to include jquery and the second is to include shapy.js

3.  In your javascript file, add this line at the top:
    const shapy = new Shapy()

    Now you can call all of shapy's methods using the new shapy object.

    Ex:

    const shapy = new Shapy()
    const element = document.querySelector(".elem")
    const elementRotate = shapy.rotateable(element)

4. Now just include your javascript file in your html file after the line including shapy.js, and you're all set!

