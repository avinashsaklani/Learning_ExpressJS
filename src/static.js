const express = require('express')
const path = require('path')
const app = express()


const staticPath = __dirname

console.log(__dirname)

app.get('/', (req, res) => {

    res.send('Login to move Forward')
}) // login page



app.get('/profilePage', (req, res) => {
    res.send('Hello! My fullname is Avinash Saklani')
})

app.get('/feedPage', (req, res) => {
    res.send('Hello! Here are all your feeds')
})

app.listen(8000, () => {
    console.log('Port running on 8000')
})






