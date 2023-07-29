const express = require('express')
const cors = require('cors')
const app = express()

// for cors policy
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: "50mb" }));



// importing all routes
const userRoutes = require('./routes/userRoutes')
const propertyRoutes = require('./routes/propertyRoutes')
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/property', propertyRoutes)


module.exports = app