const express = require('express')
const router = express.Router()
const wishlistController = require('../controllers/wishlistController')

router.post('/add', wishlistController.addToWishlist)
router.get('/allWishlist', wishlistController.getAllWishlistProperty)
router.get('/userWishList/:userId', wishlistController.userWishlist)

module.exports = router