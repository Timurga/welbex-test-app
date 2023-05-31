const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const User = require('../models/User')
const Role = require('../models/Role')
const { secret } = require("../config")

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, { expiresIn: "24h" })
}


class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: "Registartion failed", errors })
            }
            const { username, password } = req.body;
            const candidate = await User.findOne({ username })
            if (candidate) {
                return res.status(400).send("User already exist!")
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({ value: "User" })
            const user = new User({ username, password: hashPassword, roles: [userRole.value] })
            await user.save()
            res.status(201).send('User created successfully')
        } catch (e) {
            console.error(e);
            res.status(500).send('Error registering user')

        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body
            const user = await User.findOne({ username })
            if (!user) {
                return res.status(400).send(`User ${username} not found`)
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(401).send('Invalid credentials');
            }
            const token = generateAccessToken(user._id, user.roles)
            res.status(200).json({ token, user })
        } catch (e) {
            console.error(e);
            res.status(500).send('Login error');
        }
    }

    async auth(req, res) {
        try {
            const user = await User.findOne({ _id: req.user.id })
            const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' })
            return res.json({
                token,
                user: {
                    id: user.id,
                    username: user.username,
                }
            })
        } catch (e) {
            console.log(e)
            res.send({message: 'Server error'})
        }

    }

    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {
            console.error(e);

        }
    }
}

module.exports = new authController()