const express = require("express");
const { logger, iplogger } = require("./middleware");

const app = express();

app.use(logger);
app.use(iplogger);

app.get("/", (req, res) => {
    res.status(200).set('Content-Type', 'text/plain').send("Welcome to Masai!").end()
});

app.get("/about", (req, res) => {
    res.status(200).set('Content-Type', 'text/plain').send("About me").end()
});

app.get("/faq", (req, res) => {
    res.status(200).set('Content-Type', 'text/plain').send("FAQ").end()
});

app.listen(3000, () => {
    console.log("The server is up and running");
});
