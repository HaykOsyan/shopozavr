const Router = require('express')
const router = new Router()
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.get('/')
// router.get('/', checkRoleMiddleware('ADMIN'))

module.exports = router