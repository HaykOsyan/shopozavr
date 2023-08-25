const Router = require('express');
const router = new Router();
const FavoriteController = require('../controllers/favoriteController');

// Add a product to user's favorites
router.post('/add', FavoriteController.addFavorite);

// Remove a product from user's favorites
router.delete('/remove', FavoriteController.removeFavorite);

// Get user's favorite products
router.get('/user/:userId', FavoriteController.getUserFavorites);

router.get('/:userId/:productId/isFavorite',FavoriteController.isFavorite);

module.exports = router;