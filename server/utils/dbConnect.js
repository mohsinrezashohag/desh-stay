const { mongoose } = require("mongoose");

mongoose.connect(process.env.DB_URL)

const connection = mongoose.connection

connection.on('connected', () => {
    console.log("DB Connected".bold.italic.blue);
})
connection.on('error', () => {
    console.log("DB Not Connected".bold.italic.red);
})
