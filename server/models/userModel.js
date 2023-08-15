const { mongoose } = require("mongoose");
const bcrypt = require('bcrypt');
const validator = require('validator')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "first name must at lest 3 character "]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "first name must at least 3 character "]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'Must be an valid email'],
    },
    password: {
        type: String,
        required: true,
        minLength: [6, "password must be at least 6 digit"]
    },
    confirmPassword: {
        type: String,
        required: true,
        minLength: [6, "password must be at least 6 digit"]
    },
    phnNumber: {
        type: 'String',
        required: true,
        minLength: [11, "phone number must be at least 11 digit"]
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    presentAddress: {
        type: String,
    },
    permanentAddress: {
        type: String,
    },
    profession: {
        type: String
    }
    ,
    role: {
        type: String,
        enum: ["member", "seller", 'administrator', "admin"],
        default: "member"
    },

}, {
    timeStamps: true
})

userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 10)
    this.confirmPassword = undefined
    next()
})

const User = new mongoose.model('User', userSchema);
module.exports = User
