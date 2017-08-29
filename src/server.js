const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./server/routes')

const app = express()

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

app.use(bodyParser.urlencoded({ extended: true })) //still don't know why true or false

app.use('/', routes)


const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
