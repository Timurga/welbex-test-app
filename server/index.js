const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./auth/authRouter')
const postsRouter = require('./posts/postsRouter')
const corsMiddleware = require('./middleware/corsMiddleware')
require('dotenv').config()
const PORT = process.env.PORT || 5000

const app = express()

app.use(corsMiddleware)

app.use(express.json())

app.use('/auth', authRouter)
app.use('/post', postsRouter)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://admin:bgwwv6TCrgTfWXz2@test-task.38yeblu.mongodb.net/`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()