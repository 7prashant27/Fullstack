const express = require('express')
const fs = require("fs")
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
    fs.readFile('./index.html', function (err, data) {
        if (err) {
            console.log(err);
            res.status(403).json({message : "something went wrong"})
        }
        else {
            response.sendFile(__dirname + '/index.html')
        }
    })
})

app.get('/home', (request, response) => {
    response.redirect('/')
})

app.get('/search', (request, response) => {
    response.redirect('http://www.google.com')
})

app.listen(3000, () => {
    console.log("The server is up and running")
})