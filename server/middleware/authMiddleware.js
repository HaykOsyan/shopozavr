const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if(req.method === "OPTIONS"){
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        console.log('token')
        if(!token){
          return res.status(401).json({message:'user is not autentificated'})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({message:'user is not autentificated'})
    }
}