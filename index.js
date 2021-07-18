const express = require('express')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT

app.use(express.json())


app.get('/', (req, res) => {
    res.send(`app running ${PORT}`)
})



app.listen(PORT, () => console.log(`server upon port ${PORT}`))