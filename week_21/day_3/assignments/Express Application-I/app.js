const { request } = require('express')
const express = require('express')
const app = express()
const persons = require('./persons')

app.get('/', (request, response) => {
    response.writeHead(200, {'Content-Type' : 'text/html'} )
    response.write('<html lang="en"><head><title>Express</title></head><body><h1>Welcome to Masai!</h1></body></html>')
    response.end()
})

app.get('/home', (request, response) => {
    response.redirect('/')
})

app.get('/search', (request, response) => {
    response.writeHead(301, {Location: 'http://www.google.com'} )
    response.end();
})

app.listen(3000, () => {
    console.log("The server is up and running")
})