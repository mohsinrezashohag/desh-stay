const express = require('express')
const cors = require('cors')
const app = express()

// for cors policy
app.use(cors())
app.use(express.json())
app.use(express.static('public'))



// importing all routes
const userRoutes = require('./routes/userRoutes')
const propertyRoutes = require('./routes/propertyRoutes')
const wishlistRoutes = require('./routes/wishlistRoutes')
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/property', propertyRoutes)
app.use('/api/v1/wishlist', wishlistRoutes)


module.exports = app