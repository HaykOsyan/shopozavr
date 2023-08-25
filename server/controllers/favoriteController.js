const { User, Product } = require('../models/models');
const ApiError = require('../error/ApiError');

class FavoriteController {
    async addFavorite(req, res) {
        try {
            const { userId, productId } = req.body;

            // Check if both user and product exist
            const user = await User.findByPk(userId);
            const product = await Product.findByPk(productId);
            
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            // Add the product to user's favoriteProducts
            await user.addFavoriteProduct(product);

            return res.status(201).json({ message: 'Product added to favorites' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    async removeFavorite(req, res) {
        try {
            const { userId, productId } = req.body;
            // Check if both user and product exist
            const user = await User.findByPk(userId);
            const product = await Product.findByPk(productId);
            
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            // Remove the product from user's favoriteProducts
            await user.removeFavoriteProduct(product);

            return res.status(200).json({ message: 'Product removed from favorites' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    async getUserFavorites(req, res) {
        try {
            const { userId } = req.params;

            // Check if the user exists
            const user = await User.findByPk(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Get the user's favorite products
            const favoriteProducts = await user.getFavoriteProducts();

            return res.status(200).json({ favoriteProducts });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    async isFavorite(req, res) {
        try {
            const { userId, productId } = req.params;

            // Check if both user and product exist
            const user = await User.findByPk(userId);
            const product = await Product.findByPk(productId);
            
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
             // Check if the product is in the user's favoriteProducts
             const isFavorite = await user.hasFavoriteProduct(product);

             return res.status(200).json({ isFavorite });
         } catch (err) {
             console.error(err);
             res.status(500).json({ message: 'Server Error' });
         }
     }
}

module.exports = new FavoriteController();
