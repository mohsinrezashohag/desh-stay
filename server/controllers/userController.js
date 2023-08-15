const User = require('../models/userModel');
const { responseSender, errorSender } = require('../utils/responseMessage');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/tokenGenerator')


module.exports.registerUser = async (req, res, next) => {
    try {
        const newUser = req?.body;

        // password match check
        if (newUser.password !== newUser.confirmPassword) {
            return responseSender(res, 200, false, "Password does not matched")
        }
        // user Exiting check
        const userExists = await User.findOne({ email: newUser.email })
        if (userExists) {
            return responseSender(res, 200, false, "User already exists")
        }

        const user = await User.create(newUser)
        responseSender(res, 200, true, "User created successfully")


    } catch (error) {
        errorSender(res, 400, false, error.message)
    }
}

module.exports.loginUser = async (req, res) => {
    try {
        const userData = req.body;
        const user = await User.findOne({ email: userData.email })
        // checking user exists
        if (!user) {
            return responseSender(res, 200, false, "You didn't signup")
        }
        // password checking
        const comparePasswords = await bcrypt.compare(
            userData.password,
            user.password
        )
        if (!comparePasswords) {
            return responseSender(res, 200, false, "Password didn't matched")
        }

        //token generate & password hide in response
        const token = generateToken({ id: user?._id })
        const { password, ...userInfo } = user.toObject()

        return res.status(200).json({
            success: true,
            message: "logged in successfully",
            userInfo: userInfo,
            token: token
        })

    } catch (error) {
        errorSender(res, 400, false, "Logged in failed")
    }
}

module.exports.updateUser = async (req, res) => {
    try {
        const updatedUser = req.body;
        const user = await User.findByIdAndUpdate(updatedUser._id, updatedUser)

        return res.status(200).json({
            success: true,
            message: "user updated successfully",
            updatedUser: user,
        })

    } catch (error) {
        errorSender(res, 400, false, "user updated failed")
    }
}