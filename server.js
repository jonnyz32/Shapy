'use strict';
const express = require('express')
const app = express()

app.use(express.static(__dirname + '/pub'))


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`listening on port 5000 ${port}`)
})