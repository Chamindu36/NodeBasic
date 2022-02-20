// Import functions
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("GET method from Express")
})

app.listen(3000)