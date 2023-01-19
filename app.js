const express = require('express')
const hbs = require('hbs')

require('dotenv').config()

const app = express()
const port = process.env.PORT

//Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

//Serve static content
app.use(express.static('public'))

app.get('/', (req, res) =>{
  res.render('home', {
    title: 'Home NodeJS',
    name:'Jhann Rojas'
  })
})

app.get('/generic', (req, res) =>{
  res.render('generic', {
    title: 'Generic NodeJS',
    name:'Jhann Rojas'
  })
})

app.get('/elements', (req, res) =>{
  res.render('elements', {
    title: 'Generic NodeJS',
    name:'Jhann Rojas'
  })
})

app.get('*', function (req, res) {
  res.send('404 | Page not found')
})

app.listen(port)