// include express module
const express = require('express')
const app = express()

// define the relative variables
const port = 3000

// set the routes
app.get('/', (req, res) => {
  console.log('This is a movie list.')
})

// start and listen on the server
app.listen(port, () => {
  console.log(`Express is running on http:localhost:${port}`)
})