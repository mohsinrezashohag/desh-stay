const mongoose = require('mongoose');


const propertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    // property_type: {
    //     type: String,
    //     required: true
    // },
    // room_type: {
    //     type: String,
    //     required: true
    // },
    // location: {
    //     type: String,
    //     required: true
    // },
    // detailsAddress: {
    //     roadNo: {
    //         type: String,
    //         required: true
    //     },
    //     apartmentNo: {
    //         type: String,
    //         required: true
    //     },
    //     city: {
    //         type: String,
    //         required: true
    //     },
    //     zipcode: {
    //         type: String,
    //         required: true
    //     }
    // },
    // basics: {
    //     guestLimit: {
    //         type: Number,
    //         required: true
    //     },
    //     bedroom: {
    //         type: Number,
    //         required: true
    //     },
    //     bathroom: {
    //         type: Number,
    //         required: true
    //     }
    // },
    // facilities: {
    //     type: [String],
    //     required: true
    // },
    // standoutAmenities: {
    //     type: [String],
    //     required: true
    // },
    // safetyItems: {
    //     type: [String],
    //     required: true
    // },
    thumbnail: {
        type: String,
        required: true
    },
    // extraImages: {
    //     imageOne: {
    //         type: String,
    //         required: true
    //     },
    //     imageTwo: {
    //         type: String,
    //         required: true
    //     },
    //     imageThree: {
    //         type: String,
    //         required: true
    //     }
    // }
    extraImages: {
        type: [String],
        required: true
    }
})




const Property = mongoose.model('Property', propertySchema);

module.exports = Property;