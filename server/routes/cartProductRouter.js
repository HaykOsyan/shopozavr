const Router = require('express')
const router = new Router()
const CartProductController = require('../controllers/cartProductController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/', CartProductController.create);
router.get('/', CartProductController.getAll);
router.get('/cart/:cart_id', CartProductController.getByCartId); //HAYK UPGRADe
// router.get('/:id', CartProductController.getOne)
router.get('/carts/:cartId/products/:productId/quantity', CartProductController.checkProductExistsInCart);
router.put('/:id', CartProductController.update)
// router.delete('/:id', checkRoleMiddleware('ADMIN'), CartProductController.delete)

module.exports = router