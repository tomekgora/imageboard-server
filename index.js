const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const db = require('./db')
const Image = require('./image/model')
const imageRouter = require('./image/router')

app.use(imageRouter)
app.listen(port, console.log(`We are listening on port: ${port}`))