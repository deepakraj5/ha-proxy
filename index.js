const express = require('express')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())


app.get('/', (req, res) => {
    res.send(`app running ${process.env.EFLAG}`)
})



app.listen(PORT, () => console.log(`server upon port ${PORT}`))