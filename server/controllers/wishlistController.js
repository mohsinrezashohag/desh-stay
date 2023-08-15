const mongoose = require('mongoose')
const Wishlist = require('../models/wishListModel')
const Property = require('../models/propertyModel')




exports.getAllWishlist = async (req, res, next) => {
    try {

        const allWishlist = await Wishlist.find({}).populate({
            path: "property",
            select: "title thumbnail basics basics detailsAddress costPerNight"
        })


        return res.status(200).json({
            success: true,
            message: "All wishlist property loaded successfully",
            data: allWishlist
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "All wishlist property loaded failed",
        })
    }
}

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


exports.userWishlist = async (req, res, next) => {
    try {
        const userId = req.params.userId
        const myWishProperties = await Wishlist.find({ user: userId }).populate({
            path: "property",
            select: "title thumbnail basics basics detailsAddress costPerNight"
        })

        return res.status(200).json({
            success: true,
            message: "Your wishlist property loaded successfully",
            data: myWishProperties
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Your wishlist property loaded failed",
        })
    }
}

exports.removePropertyFromWishlist = async (req, res, next) => {
    try {
        const wishItemId = req.params.id
        const myWishProperties = await Wishlist.findByIdAndDelete({ _id: wishItemId })

        return res.status(200).json({
            success: true,
            message: "Your wishlist property deleted successfully",
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Your wishlist property deleted failed",
        })
    }
}
