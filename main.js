const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT| 3000

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send(`Online`)
})

app.get('/sniff', (req, res) =>{
    console.log(req)
    res.send("Got it.")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
