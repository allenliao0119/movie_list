// include modules from npm
const express = require('express')
const exphbs = require('express-handlebars')

// include movie data
const movies = require('./movies.json').results

const app = express()

// define the relative variables
const port = 3000

// set the view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine','handlebars')

// set the routes
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', {movies})
})

app.get('/movies/:id', (req, res) => {
  const id = req.params.id
  const movie = movies.find(movie => movie.id === Number(id))
  res.render('show', {movie})
})

// start and listen on the server
app.listen(port, () => {
  console.log(`Express is running on http:localhost:${port}`)
})