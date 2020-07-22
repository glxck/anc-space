const express = require('express')
const app = express()
const data = require('./src/data')//json
const host = '10.200.200.15'
const port = 5000

//Simple express API
app.get('/api/data', (req, res) => {
    res.json(data) //create api for fetch/axios (if this is not working, check proxy in package.json)
})

app.listen(port, host, () => {
    console.log(`App listen on ${port}...`)
})
