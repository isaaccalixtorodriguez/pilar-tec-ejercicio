const express = require('express')
const app = express()
const port = 5500

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})