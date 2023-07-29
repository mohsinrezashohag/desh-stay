const Property = require("../models/propertyModel");


exports.addPropertyListing = async (req, res) => {
    try {

        // const fullObject = req.body.fullObject
        // const thumbnail = req.file.filename;
        // const property = { ...JSON.parse(fullObject), thumbnail: thumbnail }
        // const addedProperty = await Property.create(property)


        const fullObject = req.body.fullObject
        const thumbnail = req.files.thumbnail[0].filename;
        const extraImages = req.files.extraImages.map(file => file.filename)

        const property = { ...JSON.parse(fullObject), thumbnail: thumbnail, extraImages: extraImages }
        const addedProperty = await Property.create(property)

        if (addedProperty) {
            console.log("add hocche");
        }
        // return res.status(200).json({
        //     success: true,
        //     message: "property listed successfully",
        //     data: addedProperty
        // })
        // console.log(property);

    } catch (error) {
        console.log(error);
    }
}