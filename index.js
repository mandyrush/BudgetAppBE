const express = require('express')
require('dotenv').config()
const cors = require("cors")
const app = express()

app.use(cors());

// Add functionality to parse json body
app.use(express.json());

let port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})