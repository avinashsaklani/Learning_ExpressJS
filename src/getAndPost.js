const express = require('express')

const app = express()

const PORT = 8000


app.use(express.json())
const moviesList = [
    {
        id: 1,
        name: 'Die Hard'
    },
    {
        id: 2,
        name: 'Transformers'
    },
    {
        id: 3,
        name: 'Terminator'
    },

]

app.listen(PORT, () => console.log(`Server is Running in ${PORT}`))

app.get('/movies', (req, res) => {
    res.send(moviesList)
})

app.get('/movies/:name', (req, res) => {
    //route parameters
    const { name } = req.params
    const movie = moviesList.find((m) => m.name === name)
    res.send(movie)
})

app.post('/movies', (req, res) => {
    console.log(req.body)
    moviesList.push(req.body)
    res.send(201)
})