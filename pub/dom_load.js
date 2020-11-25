/* dom content loaded */
"use strict";
const log = console.log
log('SCRIPT: Loading DOM Content')
console.log("--------")
console.log("This script runs before any others, as it blocks DOM loading until it is downloaded and executed.")
console.log("Some of the lines below in the console may load in a different order when you refresh, due to the 'async' attribute on on the dom_load_async script.")


document.addEventListener('DOMContentLoaded', function() {
    log(" The dom is loaded")
})