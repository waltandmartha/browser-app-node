const express = require('express')
var bodyParser = require('body-parser')
const app = express()


app.use(express.static(__dirname))
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended: false}))

const messages = [
    {name: 'Glenn', message: "Hi everyone!!"},
    {name: 'Anna', message: "What's up?!?"}
]

app.get('/messages', (req, res) => {
    res.send(messages)
})

app.post('/messages', (req, res) => {
    messages.push(req.body)
    res.sendStatus(200)
})

const server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
}) 