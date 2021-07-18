const express = require("express");
const { header_checker } = require("./middleware");

const app = express();

app.use(express.json())
app.use(header_checker);

app.get("/", (req, res) => {
    res.status(200).set('Content-Type', 'text/plain').send("Welcome home").end()
});

app.get("/name", (req, res) => {

    if(req.body.name === "" || !req.body.name ){
        res.status(403).set('Content-Type', 'application/json').send({message: "Pass name as object in the body"}).end()
    }
    else{
        res.status(200).set('Content-Type', 'application/json').send({echo: "Your name is "+ req.body.name}).end()
    }
});

app.post("/echo", (req, res) => {
    res.status(200).set('Content-Type', 'application/json').send({...req.body}).end()
});

app.listen(8000, () => {
    console.log("The server is up and running");
});