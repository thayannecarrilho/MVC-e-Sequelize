const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const app = express()
const moment = require('moment')

const tblclientes = require('./models/tblclientes')
const tblreservas = require('./models/tblreservas')

const speedRoutes = require('./routes/speedRoutes')

app.engine('handlebars', exphbs.engine({
  defaultLayout: 'main',
  helpers: {
    formatDate: (date) => {
      return moment(date).format("DD/MM/YYYY")
    }
  }  
}))

app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

app.use('/', speedRoutes)

conn
  .sync()
  .then(() => {
    app.listen(4000)
  })
  .catch((err) => console.log(err))

