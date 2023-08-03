
const Wishlist = require('../models/wishListModel')


exports.addToWishlist = async (req, res, next) => {
    try {
        const data = req.body
        const addedProperty = await Wishlist.create(data)
        return res.status(200).json({
            success: true,
            message: "property added to wishlist successfully",
            data: addedProperty
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "property added to wishlist failed",
        })
    }
}


exports.getAllWishlistProperty = async (req, res, next) => {
    try {
        const addedProperty = await Wishlist.find({})
        return res.status(200).json({
            success: true,
            message: "wishlist property loaded successfully",
            data: addedProperty
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "wishlist property loaded failed",
        })
    }
}

exports.userWishlist = async (req, res, next) => {
    try {
        const userId = req.params.userId
        console.log("hitting here :", userId);

        const userWishlist = await Wishlist.find({ user: userId })
        return res.status(200).json({
            success: true,
            message: "Your wishlist loaded successfully",
            data: userWishlist
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Your wishlist loaded failed",
        })
    }
}