const express = require('express')
const router = express.Router()
const propertyController = require('../controllers/propertyController')




const multer = require('multer')
const path = require('path')

// multer storage 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploaded-images')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })



// router.post('/list', upload.single('thumbnail'), propertyController.addPropertyListing)
router.get('/', propertyController.getAllProperty)
router.get('/:id', propertyController.getPropertyDetails)
router.post('/list', upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'extraImages', maxCount: 3 },]), propertyController.addPropertyListing)

module.exports = router