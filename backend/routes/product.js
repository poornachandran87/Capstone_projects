const express = require('express');
const { getProducts, newProduct, getSingleProduct, updateProduct, deleteProduct, createReview, getReviews, deleteReview, getAdminProducts, getCategory, suggestPlant } = require('../controllers/productController');
const router = express.Router();
const { isAuthenticatedUser,authorizeRole } = require('../middlewares/authenticate')

router.route('/products').get(getProducts)
//router.route('/products').get(isAuthenticatedUser,getProducts)

router.route('/product/:id')
                             .get(getSingleProduct)
                             .put(updateProduct)
                             .delete(deleteProduct)

router.route('/review').put(isAuthenticatedUser, createReview)
router.route('/category').get(getCategory)
router.route('/suggestPlant').post(suggestPlant)


//admin routes
router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRole('admin'),newProduct)
router.route('/admin/products').get(isAuthenticatedUser, authorizeRole('admin'), getAdminProducts);
router.route('/admin/reviews').get(isAuthenticatedUser, authorizeRole('admin'),getReviews)
router.route('/admin/review').delete(isAuthenticatedUser, authorizeRole('admin'),deleteReview)

module.exports = router;