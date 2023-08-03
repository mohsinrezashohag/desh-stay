const mongoose = require('mongoose');

// Wishlist Schema
const WishlistSchema = new mongoose.Schema({
    property: {
        type: mongoose.Types.ObjectId,
        ref: 'Property',
        default: null
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        default: null
    },

},
    {
        timeStamps: true
    }
);

module.exports = mongoose.model('Wishlist', WishlistSchema);
