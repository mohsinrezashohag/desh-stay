const User = require('../models/userModel');
const { responseSender, errorSender } = require('../utils/responseMessage');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/tokenGenerator')


exports.registerUser = async (req, res, next) => {
    try {
        const newUser = req?.body;

        // password match check
        if (newUser.password !== newUser.confirmPassword) {
            responseSender(res, 200, false, "Password does not matched")
        }
        // user Exiting check
        const userExists = await User.findOne({ email: newUser.email })
        if (userExists) {
            responseSender(res, 200, false, "User already exists")
        }

        const user = User.create(newUser)
        responseSender(res, 200, true, "User created successfully", user)


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
            responseSender(res, 200, false, "You didn't signup")
        }

        // password checking
        const comparePasswords = await bcrypt.compare(
            userData.password,
            user.password
        )
        console.log(comparePasswords);
        if (!comparePasswords) {
            responseSender(res, 200, false, "Password didn't matched")
        }

        const id = user._id
        console.log(id);
        const token = generateToken({ id: id })
        console.log(token);

        const { password, ...userInfo } = user.toObject()

        res.status(200).json({
            success: true,
            message: "logged in successfully",
            userInfo: userInfo,
            token: token
        })

    } catch (error) {
        errorSender(res, 400, false, "Logged in failed")
    }
}