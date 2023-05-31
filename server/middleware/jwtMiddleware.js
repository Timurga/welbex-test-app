const jwt = require('jsonwebtoken')
const { secret } = require('../config')
const User = require('../models/User')

module.exports = function (req, res, next) {
    try {
        const user = User.findOne({username: req.body.author})
        const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' })

        if (!token) {
            return res.send({ message: 'Authorization token missing'})
        }
        const decodedData = jwt.verify(token, secret)
        if (decodedData) {
            next()
        }
    } catch (e) {
        console.log(e)
        return res.status(403).send('User not found')
    }
}