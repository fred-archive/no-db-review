require('dotenv').config()
const express = require('express')
const {PORT} = process.env
cosnt ctrl = require('./controllers/controller')

const app = express()
app.use(express.json())

//endpoints
app.post('/api/pokemon', ctrl.catch)

app.listen(PORT, ()=> console.log(`${PORT} ducks marching on Rome.`))
