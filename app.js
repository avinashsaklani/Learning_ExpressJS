const express = require('express')

const app = express()

let name = 'Avinash'
let Password = 1234567
//api methods - get post put delete
// app.get(route, callback(req, res))

app.get('/', (req, res) => {
    res.write('<h1> This is the Login Page </h1>')
    res.write('<h1> Welcome! </h1>')
    res.send()
}) // login page

app.use(loginMiddleWare)

app.get('/profilePage', (req, res) => {
    res.send('Hello! My fullname is Avinash Saklani')
})

app.get('/feedPage', (req, res) => {
    res.send('Hello! Here are all your feeds')
})

app.listen(8000, () => {
    console.log('Port running on 8000')
})


function loginMiddleWare(req, res, next) {
    if (name == 'Avinash' && Password == 1234567) {
        next()
    }
    else {
        res.send('Cannot authenticate the user')
    }
}



