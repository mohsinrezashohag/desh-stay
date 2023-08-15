const express = require('express')
const router = express.Router()
const wishlistController = require('../controllers/wishlistController')

router.get('/', wishlistController.getAllWishlist)
router.post('/add', wishlistController.addToWishlist)
router.get('/userWishList/:userId', wishlistController.userWishlist)
router.delete('/removeWishlistProperty/:id', wishlistController.removePropertyFromWishlist)

module.exports = router