var express = require('express');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
// const swaggerUi = require('swagger-ui-express');
const cors = require('cors')
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird')
mongoose.set('useFindAndModify', false)
require('dotenv').config()


//mongo connect
mongoose.connect('mongodb+srv://naufalalimw:nalimw12@cluster0.kv1bh.mongodb.net/reksti08?retryWrites=true&w=majority').then(
      db => {
        console.log('Connected to db server')
        console.log('Connection state: ' + mongoose.connection.readyState)
      },
      err => {
        console.error(err)
      }
    )
    .catch(err => {
      console.error(err.message)
    });



const pelangganRoutes = require('./routes/pelanggan.routes')
const adminRoutes = require('./routes/admin.routes')
const lapanganRoutes = require('./routes/lapangan.routes')
const reservasiRoutes = require('./routes/reservasi.routes')
const promoRoutes = require('./routes/promo.routes')
// App
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(cookieParser())
app.use(cors())

app.use(pelangganRoutes)
app.use(adminRoutes)
app.use(lapanganRoutes)
app.use(reservasiRoutes)
app.use(promoRoutes)

module.exports = app;