const express = require('express')
const cors = require('cors')
const app = express()

// for cors policy
app.use(cors())
app.use(express.json())

// importing all routes
const userRoutes = require('./routes/userRoutes')
app.use('/api/v1/user', userRoutes)


module.exports = app