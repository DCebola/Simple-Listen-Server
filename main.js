const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3001;

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

app.listen(PORT, () => {
    console.log("Server is running on port 3001.")
});