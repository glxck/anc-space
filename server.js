const express = require('express')
const app = express()
const data = require('./src/data')//json
const port = 5000

//Simple express API
app.get('/api/data', (req, res) => {
    res.json(data) //create api for fetch/axios (if this not work, check proxy in package.json)
})

app.listen(port, () => {
    console.log(`App listen on ${port}...`)
})
