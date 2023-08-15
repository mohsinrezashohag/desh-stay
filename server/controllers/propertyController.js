const Property = require("../models/propertyModel");


module.exports.addPropertyListing = async (req, res) => {
    try {
        const fullObject = req.body.fullObject
        const thumbnail = req.files.thumbnail[0].filename;
        const extraImages = req.files.extraImages.map(file => file.filename)


        const property = { ...JSON.parse(fullObject), thumbnail: thumbnail, extraImages: extraImages }
        const addedProperty = await Property.create(property)

        return res.status(200).json({
            success: true,
            message: "property listed successfully",
            data: addedProperty
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "property listing failed",
        })
    }
}
module.exports.getAllProperty = async (req, res) => {
    try {
        const allProperty = await Property.find({})

        return res.status(200).json({
            success: true,
            message: "property loaded successfully",
            data: allProperty
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "property loading failed",
        })
    }
}
module.exports.getPropertyDetails = async (req, res) => {
    try {
        const id = req.params.id
        const propertyDetails = await Property.findById({ _id: id })

        return res.status(200).json({
            success: true,
            message: "property details loaded successfully",
            data: propertyDetails
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "property details loaded successfully",
        })
    }
}