const User = require('../models/User')

module.exports = async function (req, res, next) {
    try {
        const user = await User.findOne({username: req.body.author})
        if(user.username === req.body.username) {
            next()
        } else {
            return res.send(`You're not a author`)
        }

        
    } catch (e) {
        console.log(e)
        return res.status(403).send('User not found')
    }
}