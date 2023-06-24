const app = require('./app');
const dotenv = require('dotenv').config();
const colors = require('colors')
const dbConnect = require('./utils/dbConnect')

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server Running On :".blue.bold, process.env.SERVER_PORT)
}) 